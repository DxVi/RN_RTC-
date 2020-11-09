import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import {AppStyles, rtc} from './AppStyles';

export default function OfficerCard({line, name, position, group}) {
    return (
            <View 
                style={position === 'Chairman' || 
                       position === 'General Manager' ||
                       position === 'Store Keeper' ? styles.chairman : styles.member}>

                <View style={line || position==='Treasurer' ? styles.groupLine : ''}>
                {/* <View>
                    {
                        line || position==='Treasurer'
                        ?<Text>--------------------------------------------------------------</Text>
                        :<Text></Text>
                    } */}
                </View>

                <View style={styles.officerCard}>
                    <Image 
                        style={styles.image} 
                        resizeMode={'contain'} 
                        source={require('../../assets/icon.png')} 
                    />
                    <Text style={rtc.textItem}>{name}</Text>
                    <Text style={rtc.textDesc}>{position}</Text>
                    <Text style={rtc.textItem}>{group}</Text>
                </View>
            </View>
    )
}

const styles =  StyleSheet.create({
    image:{
        width: 100,
        height:100,
        margin: 5,
    },
    officerCard:{
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        opacity: .8,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: AppStyles.color.border,
    },
    chairman:{
        width: 350,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    member:{
        width: 180,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    groupLine:{
        borderBottomWidth: 1,
        borderBottomColor: 'crimson',
        // opacity: .3,
        borderStyle: 'dashed',
        width: '100%',
        height: 50,
        margin: 20,
        backgroundColor: 'red',
    },
});



            