import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity , View} from 'react-native';
import {  Container, RTC} from '../../../AppStyles';

import About from './About';
import Officers from './Officers';

export default function HomeScreen({navigation}) {

    const onLoginPress = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={Container.main}>
             {/* Header */}
             <View style={Container.header}>
                 <Image resizeMode={'cover'} style={RTC.logoS} source={require('../../../assets/icon.png')} />
                 <Text style={RTC.romblon}>ROMBLON<Text style={RTC.transport}>Transport</Text></Text>
             </View>

             {/* Menu Icons */}
             <View style={Container.menuIcons}>
                    <View style={styles.menuIcons}>
                        <TouchableOpacity><Text style={styles.menuIconsText}>Login</Text></TouchableOpacity>
                    </View>
                    <View style={styles.menuIcons}>
                        <TouchableOpacity><Text style={styles.menuIconsText}>Logout</Text></TouchableOpacity>
                    </View>
                    <View style={styles.menuIcons}>
                        <TouchableOpacity><Text style={styles.menuIconsText}>Upload</Text></TouchableOpacity>
                    </View>
             </View>

             {/* Menu Images */}
             <View style={Container.menuImages}>
             <ScrollView horizontal={true} >
                    <TouchableOpacity style={styles.menuImages} onPress={() => navigation.navigate('Login')}><Text >Menu1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => navigation.navigate('Registration')}><Text>Menu2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => alert('menu3')}><Text>Menu3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => alert('menu4')}><Text>Menu4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => alert('menu5')}><Text>Menu5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => alert('menu6')}><Text>Menu6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => alert('menu7')}><Text>Menu7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuImages} onPress={() => alert('menu8')}><Text>Menu8</Text></TouchableOpacity>
             </ScrollView>
             </View>

             {/* Home Screen */}
             <ScrollView style={Container.home}>
                <About />
                <Officers />
             </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menuIcons:{
        backgroundColor: 'white',
        borderRightColor: 'gray',
        borderBottomColor: 'gray',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    menuIconsText:{
        color: 'blue',
    },
    menuImages:{
        height: 100,
        width: 100,
        margin: 5,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: 'gray',
    },
});