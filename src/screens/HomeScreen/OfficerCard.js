import React from 'react'
import {  Image, Text, View } from 'react-native';
import {RTC} from '../../../AppStyles';
import styles from './styles';

export default function OfficerCard({name, position, group}) {
    return (
        <View style={position === 'Chairman' ? styles.chairman : styles.member}>
            <View style={styles.officerCard}>
                <Image 
                    style={RTC.logoS} 
                    resizeMode={'contain'} 
                    source={require('../../../assets/icon.png')} 
                />
                <Text style={RTC.desc}>{position}</Text>
                <Text style={RTC.item}>{name}</Text>
            </View>
        </View>
    )
}

