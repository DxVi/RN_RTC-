import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import {rtc} from './AppStyles';
import ViewSlide from './ViewSlide';

export default function OfficerCard({name, position, group, imgUri}) {
    const groupIndicator = ('Chairman General Manager Store Keeper').includes(position)
    const SecretaryTreasurer = ('Secretary Treasurer').includes(position)
    const int = Math.floor(Math.random() * Math.floor(6))
    
    return (
            <ViewSlide style={groupIndicator ? styles.chairman : styles.member} int={int}>
                <View
                    style={[styles.officerCard, 
                            groupIndicator ? styles.groupColor : '',
                            SecretaryTreasurer ? styles.sectre : ''
                        ]}
                    >
                    <Image 
                        style={styles.image} 
                        // resizeMode={'contain'} 
                        source={{
                                uri: imgUri,
                                cache: 'force-cache'
                               }} 
                    />
                    <Text style={rtc.textItem}>{name}</Text>
                    <Text style={rtc.textDesc}>{position}</Text>
                    <Text style={rtc.textItem}>{group}</Text>
                </View>
            </ViewSlide>
    )
}

const styles =  StyleSheet.create({
    image:{
        margin: 5,
        width: 100,
        height:100,
        borderRadius: 15,
    },
    officerCard:{
        width: 170,
        height: 170,
        opacity: .8,
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'dashed',
        borderColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chairman:{
        margin: 10,
        width: 350,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    member:{
        margin: 10,
        width: 180,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupColor:{
        borderColor: 'darkgreen',
    },
    sectre:{
        borderColor: 'salmon',
    }
});



            