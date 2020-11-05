import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { useStateValue } from '../../../StateProvider';

export default function HomeScreen({navigation}) {
    const [{user, fullname}, dispatch] = useStateValue();
    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    // console.log("INSIDE HOME>>>", extraData)
    // const userID = extraData.id
    // const userName = extraData.fullName
    
    useEffect(() => {
        // console.log("inside home->useeffect>>>>",user)
        entityRef
            .where("authorID", "==", user)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onLogoutButtonPress = () => {
        firebase.auth().signOut(); 
        dispatch(
            {
                type: 'SET_USER',
                user: null,
                fullname: 'LOGGED-OUT',
            }
        )
        navigation.navigate('Login')
    }

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: user,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {/* {index}. {item.text} */}
                    {item.text}
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <View>
                <Text>Logged In : {fullname}</Text>
                <TouchableOpacity style={styles.button} onPress={onLogoutButtonPress}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity disabled={!entityText} style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
        </SafeAreaView>
    )
}