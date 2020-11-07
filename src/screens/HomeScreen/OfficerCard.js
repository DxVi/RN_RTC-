import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import {AppStyles, RTC} from '../../../AppStyles';

export default function OfficerCard({name, position, group}) {
    return (
        <View style={position === 'Chairman' ? styles.chairman : styles.member}>
            <View style={styles.officerCard}>
                <Image 
                    style={styles.image} 
                    resizeMode={'contain'} 
                    source={require('../../../assets/icon.png')} 
                />
                <Text style={RTC.item}>{name}</Text>
                <Text style={RTC.desc}>{position}</Text>
                <Text style={RTC.item}>{group}</Text>
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
        backgroundColor: AppStyles.color.border,
        width: 160,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        opacity: .8,
    },
    chairman:{
        backgroundColor: AppStyles.color.white,
        width: 400,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    member:{
        backgroundColor: AppStyles.color.white,
        width: 160,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
});
