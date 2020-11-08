import React from 'react'
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity , View} from 'react-native';
import {AppStyles, rtc} from '../../../AppStyles';

export default function HomeScreen({navigation}) {
    const onLoginPress = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={rtc.containerMain}>
             {/* Header */}
             <View style={styles.header}>
                 <Image resizeMode={'cover'} style={rtc.logoS} source={require('../../../assets/icon.png')} />
                 <Text style={rtc.romblon}>ROMBLON<Text style={rtc.transport}>Transport</Text></Text>
             </View>

             {/* Menu Icons */}
             <View style={styles.menuIcons}>
                <TouchableOpacity style={styles.menuIcon}><Text style={styles.menuIconText}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.menuIcon}><Text style={styles.menuIconText}>Logout</Text></TouchableOpacity>
                <TouchableOpacity style={styles.menuIcon}><Text style={styles.menuIconText}>Upload</Text></TouchableOpacity>
             </View>

             {/* Menu Images */}
            <View style={styles.menuImages}>
                <ScrollView horizontal={true} style={{height: 150}}>
                    <View style={styles.menuImage}>
                        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('About')}><Text >About</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Registration')}><Text>Officers</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => alert('menu3')}><Text>VMC</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => alert('menu4')}><Text>Menu4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => alert('menu5')}><Text>Menu5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => alert('menu6')}><Text>Menu6</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => alert('menu7')}><Text>Menu7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => alert('menu8')}><Text>Menu8</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
             

             {/* Home Screen */}
             <ScrollView style={styles.body}>
                    <Text>Body</Text>
             </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: -1,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: AppStyles.color.white,
        borderBottomColor: AppStyles.color.border,
    },
    menuIcons:{
        flex: -1,
        height: 40,
        flexDirection: 'row',
    },
    menuIcon:{
        borderTopColor: AppStyles.color.white,
        borderLeftColor: AppStyles.color.border,
        borderRightColor: AppStyles.color.border,
        borderBottomColor: AppStyles.color.border,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    menuIconText:{
        color: AppStyles.color.textS,
    },
    menuImages:{
        flex: -1,
        height: 150,        
    },
    menuImage:{
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
    },
    menu:{
        width: 100,
        height: 120,
        margin: 5,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: 'gray',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body:{
        backgroundColor: 'cornflowerblue'
    }
});