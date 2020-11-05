import React from 'react'
import { FlatList,SafeAreaView, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import { useStateValue } from '../../../StateProvider';
import styles from './styles';
import RTCData from '../../../assets/RTCData.json';


export default function HomeScreen({navigation}) {
    const [{user, fullname}, dispatch] = useStateValue();

    // console.log(RTCData);
    const onLoginPress = () => {
        console.log("login>>>>")
        navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={styles.container}>
        <View >
             <View style={styles.header}>
                 <Text style={styles.headerText}>ROMBLONTransport</Text>
             </View>

             <View style={styles.nav}>
                    <View style={styles.navItem}>
                        <TouchableOpacity><Text>Login</Text></TouchableOpacity>
                    </View>
                    <View style={styles.navItem}>
                        <TouchableOpacity><Text>Logout</Text></TouchableOpacity>
                    </View>
                    <View style={styles.navItem}>
                        <TouchableOpacity><Text>Upload</Text></TouchableOpacity>
                    </View>
             </View>

             <ScrollView horizontal={true} style={styles.scrollView}>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => navigation.navigate('Login')}><Text >Menu1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => navigation.navigate('Registration')}><Text>Menu2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => alert('menu3')}><Text>Menu3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => alert('menu4')}><Text>Menu4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => alert('menu5')}><Text>Menu5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => alert('menu6')}><Text>Menu6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => alert('menu7')}><Text>Menu7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItem} onPress={() => alert('menu8')}><Text>Menu8</Text></TouchableOpacity>
             </ScrollView>
             <View >
             <FlatList
                style={styles.containerx}
                data={RTCData.fares.odiongan}
                renderItem={({ item }) => <Text style={styles.row}>{item.destination} - {item.rental}</Text>}
                keyExtractor={(item) => item.destination}
                />
                </View>
             <ScrollView style={styles.body}>
    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu1')}><Text>{RTCData.main.title}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu2')}><Text>Menu2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu3')}><Text>Menu3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu4')}><Text>Menu4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu5')}><Text>Menu5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu6')}><Text>Menu6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu7')}><Text>Menu7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu8')}><Text>Menu8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu1')}><Text>Menu1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu2')}><Text>Menu2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu3')}><Text>Menu3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu4')}><Text>Menu4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu5')}><Text>Menu5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu6')}><Text>Menu6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu7')}><Text>Menu7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.scrollItemx} onPress={() => alert('menu8')}><Text>Menu8</Text></TouchableOpacity>
             </ScrollView>

        </View>
        </SafeAreaView>
    )
}