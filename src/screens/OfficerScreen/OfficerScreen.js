import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import data from '../../../assets/data/officer.json';
import {rtc} from '../../../AppStyles';
import OfficerCard from './OfficerCard';
import FadeInView from '../../utils/FadeInView';

export default function OfficerScreen() {
    let group="BOD";

    return (
        <FadeInView style={rtc.containerMain}>
            <Text style={rtc.textHeader}>Officers</Text>

            <ScrollView>
                <View style={styles.group}>
                    {
                        data.officers.map( (officer) =>
                            {
                            if (group !== officer.group){
                                group = officer.group;
                                return (
                                    <>
                                    <Text style={styles.line}>------------------------------------------------------------------</Text>
                                    <OfficerCard key={officer.name+officer.group} name={officer.name} position={officer.position} group={officer.group}/>
                                    </>
                                )
                            }  else {
                                return(
                                <OfficerCard key={officer.name+officer.group} name={officer.name} position={officer.position} group={officer.group}/>
                                )
                            }
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
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    line:{
        color: 'crimson',
        opacity: .3,
    }
});
