import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Container, RTC} from '../../../AppStyles';

export default function ListItem({item, desc}) {
    return (
        <View style={Container.row}>
            <View style={Container.item}>
                <Text style={RTC.item}>{item}</Text>
            </View>

            <View style={Container.desc}>
                <Text style={RTC.desc}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
