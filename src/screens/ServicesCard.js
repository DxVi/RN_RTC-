import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import {AppStyles,rtc} from './AppStyles';
import ViewSlide from '../utils/ViewSlide';

export default function ServicesCard({title, description, image}) {
    const int = Math.floor(Math.random() * Math.floor(6))
    let img =''

    switch(image){
        case 0: img = require('../../assets/images/site/s1.jpg'); break;
        case 1: img = require('../../assets/images/site/s2.jpg'); break;
        case 2: img = require('../../assets/images/site/s3.jpg'); break;
        case 3: img = require('../../assets/images/site/s4.jpg'); break;
        case 4: img = require('../../assets/images/site/s5.jpg'); break;
        case 5: img = require('../../assets/images/site/s6.jpg'); break;
    }

    return (
        <ViewSlide style={styles.ServiceCard} int={int}>
            <Image 
                style={styles.image} 
                source={img} 
            />
            <Text style={rtc.textItem}>{title}</Text>
            <Text style={[rtc.textDesc, styles.desc]}>{description}</Text>
        </ViewSlide>
    )
}

const styles = StyleSheet.create({
    ServiceCard:{
        width: 180,
        height: 210,
        backgroundColor: AppStyles.color.white,
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'dashed',
        borderColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5,
    },
    image:{
        margin: 5,
        width: 120,
        height:120,
        borderRadius: 15,
    },
    desc:{
        textAlign: 'justify',
    }
})
