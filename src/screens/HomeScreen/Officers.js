import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import data from '../../../assets/data/RTC.json';
import {Container, RTC} from '../../../AppStyles';
import styles from './styles';
import OfficerCard from './OfficerCard';

export default function Officers() {
    return (
        <View style={styles.officers}>
            <Text style={RTC.header}>Officers</Text>

            
            <View style={styles.group}>
                <Text style={RTC.item}>BOD</Text>
                {
                    data.officers.bod.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="BOD" />
                    )
                }
            </View>            
           
            <View style={styles.group}>
                <Text style={RTC.item}>Audit</Text>
                {
                    data.officers.audit.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Audit" />
                    )
                }
            </View>            
            
            <View style={styles.group}>
                <Text style={RTC.item}>Election</Text>
                {
                    data.officers.election.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Election" />
                    )
                }
            </View>      
                 
            <View style={styles.group}>
                <Text style={RTC.item}>Admin 1</Text> 
                {
                    data.officers.admin1.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Admin 1" />
                    )
                }
            </View>     
                 
            <View style={styles.group}>
                <Text style={RTC.item}>Education</Text>  
                {
                    data.officers.education.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Education" />
                    )
                }
            </View>         
               
            <View style={styles.group}>
                <Text style={RTC.item}>Mediation</Text>
                {
                    data.officers.mediation.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Mediation" />
                    )
                }
            </View>     

            <View style={styles.group}>
                <Text style={RTC.item}>Ethics</Text>
                {
                    data.officers.ethics.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Ethics" />
                    )
                }
            </View> 

            <View style={styles.group}>
                <Text style={RTC.item}>GAD</Text>        
                {
                    data.officers.gad.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="GAD" />
                    )
                }
            </View>       

            <View style={styles.group}>
                <Text style={RTC.item}>Admin 2</Text>
                {
                    data.officers.admin2.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Admin 2" />
                    )
                }
            </View>       

            <View style={styles.group}>
                <Text style={RTC.item}>Operation</Text>     
                {
                    data.officers.operation.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Operation" />
                    )
                }
            </View>            

        </View>
    )
}

 
