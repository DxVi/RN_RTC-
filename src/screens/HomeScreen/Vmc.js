import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import data from '../../../assets/data/RTC.json';
import {AppStyles, Container, RTC} from '../../../AppStyles';

export default function Vmc() {
    return (
        <View style={Container.normal}>

            <Text style={RTC.header}>Vision</Text>
            <View style={styles.vmc}>
                <Text style={styles.vision}>{data.vmc.vision}</Text>
            </View>

            <Text style={RTC.header}>Mission</Text>
            <View style={styles.vmc}>
                <Text style={RTC.item}>{data.vmc.mission1}</Text>
                <Text> </Text>
                <Text style={RTC.desc}>i. {data.vmc.mission2}</Text>
                <Text style={RTC.desc}>ii. {data.vmc.mission3}</Text>
                <Text style={RTC.desc}>iii. {data.vmc.mission4}</Text>
            </View>

            <Text style={RTC.header}>Core Values</Text>
            <View style={styles.vmc}>
                <Text style={RTC.desc}>{data.vmc.corevalues}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vmc:{
        marginBottom: 20,
        marginLeft: 10,
    }, 
    vision:{
        textAlign: 'center',
        fontWeight: 'normal',
        color: AppStyles.color.item,
        fontSize: AppStyles.fontSize.desc,
    }
})
