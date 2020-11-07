import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import data from '../../../assets/data/RTC.json';
import {AppStyles, RTC} from '../../../AppStyles';
import OfficerCard from './OfficerCard';

export default function Officers() {
    return (
        <View style={styles.officers}>
            <Text> </Text>
            <Text style={RTC.header}>Officers</Text>

            {/* BOD */}
            <View style={styles.group}>
                {
                    data.officers.bod.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"BOD"}/>
                    )
                }
            </View>            
           
            {/* AUDIT */}
            <View style={styles.group}>
                {
                    data.officers.audit.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Audit"}/>
                    )
                }
            </View>            
            
            {/* ELECTION */}
            <View style={styles.group}>
                {
                    data.officers.election.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Election"}/>
                    )
                }
            </View>      
                 
            {/* ADMIN1 */}     
            <View style={styles.group}>
                {
                    data.officers.admin1.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={""}/>
                    )
                }
            </View>     
                 
            {/* EDUCATION */}     
            <View style={styles.group}>
                {
                    data.officers.education.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Education"}/>
                    )
                }
            </View>         
               
            {/* MEDIATION */}
            <View style={styles.group}>
                {
                    data.officers.mediation.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Mediation"}/>
                    )
                }
            </View>     

            {/* ETHICS */}
            <View style={styles.group}>
                {
                    data.officers.ethics.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Ethics"}/>
                    )
                }
            </View> 

            {/* GAD */}
            <View style={styles.group}>
                {
                    data.officers.gad.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"GAD"}/>
                    )
                }
            </View>       

            {/* ADMIN2 */}
            <View style={styles.group}>
                {
                    data.officers.admin2.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Admin"}/>
                    )
                }
            </View>       

            {/* OPERATION */}
            <View style={styles.group}>
                {
                    data.officers.operation.map( (officer) =>
                        <OfficerCard key={officer.name} name={officer.name} position={officer.position} group={"Operation"}/>
                    )
                }
            </View>            

        </View>
    )
}

const styles =  StyleSheet.create({
    officers:{
        flex: 1,
        alignItems: 'center',
    },
    group:{
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: AppStyles.color.border,
    },
});
