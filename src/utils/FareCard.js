import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import { AppStyles } from './AppStyles'
import ViewSlide from './ViewSlide'

export default function FareCard({header, origin, destination, rental}) {
    const int = Math.floor(Math.random() * Math.floor(6))
    return (
        <ViewSlide style={[styles.container, header ? styles.noborder : '']} int={int}>
            <Text style={ header ? styles.header : styles.origin}>{origin}</Text> 
            <Text style={ header ? styles.header : styles.destination}>{destination}</Text> 
            <Text style={ header ? styles.header : styles.destination}>{rental}</Text> 
        </ViewSlide>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        margin: 3,
        width: '90%',
        padding: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dotted',
        borderColor: '#dae4f3',
    },
    header:{
        padding: 5,
        margin: 3,
        width: '33%', 
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        color: AppStyles.color.header,
        borderColor: 'tomato',
        fontSize: AppStyles.fontSize.header,
    },
    noborder:{
        borderWidth: 0,
    },
    origin:{
        paddingLeft: 30,
        width: '33%',
        color: '#4267b2',
        fontSize: AppStyles.fontSize.desc,
    },
    destination:{
        paddingLeft: 10,
        width: '33%',
        color: '#2c455d',
        textAlign: 'left',
        fontSize: AppStyles.fontSize.desc,
    },
})

 