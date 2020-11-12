import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import {rtc} from '../utils/AppStyles';
import OfficerCard from '../utils/OfficerCard';
import FadeInView from '../utils/FadeInView';
import data from '../../assets/data/officer.json';

export default function Officer() {
    let group="BOD";

    return (
        <FadeInView style={rtc.containerMain}>
            <Text style={[styles.officer, rtc.textTitle]}>Officers</Text>
            <ScrollView>
                <View style={styles.group}>
                    {
                        data.officers.map( (officer,index) =>
                            {
                                if (group !== officer.group){
                                    group = officer.group
                                }  
                                return(
                                    <OfficerCard 
                                        key = {index} 
                                        name = {officer.name} 
                                        position = {officer.position} 
                                        group = {officer.group}
                                        imgUri = {officer.image}
                                    />
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        </FadeInView>
    )
}

const styles =  StyleSheet.create({
    group:{
        flex: 1,
        width: '100%',
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    officer:{
        marginTop: 30,
        marginBottom: 15,
        textAlign: 'center',
    }
});

 