import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity , View} from 'react-native';
import { useStateValue } from '../../../StateProvider';
import RTCData from '../../../assets/RTCData.json';
import styles from './styles';

export default function HomeScreen({navigation}) {
    const [{user, fullname}, dispatch] = useStateValue();

    const onLoginPress = () => {
        console.log("login>>>>")
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
        <View >
             /*** Header ***/
             <View style={styles.header}>
                 <Text style={styles.headerText}>ROMBLONTransport</Text>
             </View>

             /*** Menu ***/
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

             /*** Home Screen ***/
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



import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import {AppStyles} from '../../AppStyles';

export default StyleSheet.create({
    menuIcons:{
        backgroundColor: colors.white,
        borderRightColor: colors.border,
        borderBottomColor: colors.border,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    menuIconsText:{
        color: colors.primary,
    },
    
    menuImagesContainer:{
        backgroundColor: colors.white,
        width: '100%',
        height: 130,
        flexDirection: 'row',
    },
    menuImages:{
        height: 100,
        width: 100,
        margin: 5,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: colors.border,
    },
    homeContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
        padding: 20,
    },
    about:{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    aboutLogo:{
        width: 250,
        height: 311,
    },
    aboutTitle:{
        fontSize: 25,
        fontWeight: 900,
        color: colors.primary,
    },
    aboutCda:{
        fontSize: 12,
        lineHeight: 20,
        color: colors.primary,
    },
    aboutAbout:{

    },
    aboutName:{
        fontSize: 12,
        lineHeight: 20,
        color: colors.secondary,
        fontWeight: 'bold',
    }





