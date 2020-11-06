import React from 'react'
import {  Image, Text, View } from 'react-native';
import {Container, RTC} from '../../../AppStyles';

export default function OfficerCard({name, position, group}) {
    return (
        <View style={position === 'Chairman' ? Container.chairman : Container.officerCard}>
            <Image 
                style={RTC.logoS} 
                resizeMode={'contain'} 
                source={require('../../../assets/icon.png')} 
            />
            <Text style={RTC.description}>{position}</Text>
            <Text style={RTC.item}>{name}</Text>
        </View>
    )
}

