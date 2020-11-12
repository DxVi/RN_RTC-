import React from 'react'
import {StyleSheet, Text } from 'react-native'
import {rtc} from './AppStyles';
import ViewSlide from './ViewSlide';

export default function AboutItem({item, desc}) {
    const int = Math.floor(Math.random() * Math.floor(6))

    return (
        <ViewSlide style={rtc.containerRowLeft} int={int}>
            <Text style={[styles.item, rtc.textItem]}>{item}</Text> 
            <Text style={[styles.desc, rtc.textDesc]}>{desc}</Text>
        </ViewSlide>
    )
}

const styles = StyleSheet.create({
    item:{
        width: '35%',
        marginRight: 5,
        textAlign: 'right',
    },
    desc:{
        width: '65%',
    }
})

 