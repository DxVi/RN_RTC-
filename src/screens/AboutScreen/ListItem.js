import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import {AppStyles, rtc} from '../../../AppStyles';

export default function ListItem({item, desc}) {
    return (
        <View style={rtc.containerRowLeft}>
            <Text style={[styles.item, rtc.textItem]}>{item}</Text> 
            <Text style={[styles.desc, rtc.textDesc]}>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        width: '35%',
        marginRight: 5,
        textAlign: AppStyles.textAlign.right,
    },
    desc:{
        width: '65%',
    }
})

 