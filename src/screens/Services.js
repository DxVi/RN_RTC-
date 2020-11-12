import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import {rtc} from '../utils/AppStyles';
import ServicesCard from '../utils/ServicesCard';
import FadeInView from '../utils/FadeInView';
import data from '../../assets/data/services.json';

export default function Services() {
    return (
        <FadeInView style={rtc.containerMain}>
            <Text style={[styles.servicesTitle, rtc.textTitle]}>Services</Text>
            <ScrollView>
                <View style={styles.services}>
                    {
                        data.services.map( (service,index) =>
                            {
                                return(
                                    <ServicesCard 
                                        key = {index} 
                                        title = {service.title} 
                                        description = {service.description} 
                                        image = {index}
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

const styles = StyleSheet.create({
    servicesTitle:{
        marginTop: 30,
        marginBottom: 15,
        textAlign: 'center',
    },
    services:{
        flex: 1,
        width: '100%',
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
