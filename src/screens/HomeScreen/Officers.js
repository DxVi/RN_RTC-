import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import data from '../../../assets/data/RTC.json';
import {Container, RTC} from '../../../AppStyles';
import OfficerCard from './OfficerCard';

export default function Officers() {
    return (
        <View style={Container.normal}>
            <Text style={RTC.header}>Officers</Text>

            <Text style={RTC.item}>BOD</Text>
            <View style={Container.officers}>
                {
                    data.officers.bod.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="BOD" />
                    )
                }
            </View>            

            <Text style={RTC.item}>Audit</Text>
            <View style={Container.officers}>
                {
                    data.officers.audit.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Audit" />
                    )
                }
            </View>            

            <Text style={RTC.item}>Election</Text>
            <View style={Container.officers}>
                {
                    data.officers.election.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Election" />
                    )
                }
            </View>      

            <Text style={RTC.item}>Admin 1</Text>      
            <View style={Container.officers}>
                {
                    data.officers.admin1.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Admin 1" />
                    )
                }
            </View>     

            <Text style={RTC.item}>Education</Text>       
            <View style={Container.officers}>
                {
                    data.officers.education.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Education" />
                    )
                }
            </View>         

            <Text style={RTC.item}>Mediation</Text>   
            <View style={Container.officers}>
                {
                    data.officers.mediation.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Mediation" />
                    )
                }
            </View>     

            <Text style={RTC.item}>Ethics</Text>       
            <View style={Container.officers}>
                {
                    data.officers.ethics.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Ethics" />
                    )
                }
            </View>    

            <Text style={RTC.item}>GAD</Text>        
            <View style={Container.officers}>
                {
                    data.officers.gad.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="GAD" />
                    )
                }
            </View>       

            <Text style={RTC.item}>Admin 2</Text>     
            <View style={Container.officers}>
                {
                    data.officers.admin2.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Admin 2" />
                    )
                }
            </View>       

            <Text style={RTC.item}>Operation</Text>     
            <View style={Container.officers}>
                {
                    data.officers.operation.map( (officer) =>
                        <OfficerCard name={officer.name} position={officer.position} group="Operation" />
                    )
                }
            </View>            

        </View>
    )
}

const styles = StyleSheet.create({})
