import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import {rtc} from './AppStyles';
import OfficerCard from './OfficerCard';
import FadeInView from '../utils/FadeInView';
import data from '../../assets/data/officer.json';

export default function Officer() {
    let group="BOD";
    let drawLine = false;

    return (
        <FadeInView style={rtc.containerMain}>
            <Text style={[styles.officer, rtc.textTitle]}>Officers</Text>
            <ScrollView>
                <View style={styles.group}>
                    {
                        data.officers.map( (officer,index) =>
                            {
                                drawLine = false
                                if (group !== officer.group){
                                    group = officer.group
                                    drawLine = true
                                }  
                                return(
                                <OfficerCard key={index} line={drawLine} name={officer.name} position={officer.position} group={officer.group}/>
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
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    officer:{
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 15,
    }
});


// if (group !== officer.group){
//     group = officer.group;
//     {console.log(index)}
//     return (
//         <>
//         {/* <Text key={index+officer.position} style={styles.line}>------------------------------------------------------------------</Text> */}
//         <OfficerCard key={index} name={officer.name} position={officer.position} group={officer.group}/>
//         </>
//     )
// }  else {
//     {console.log(index)}
//     return(
        
//     <OfficerCard key={index} name={officer.name} position={officer.position} group={officer.group}/>
//     )
// }