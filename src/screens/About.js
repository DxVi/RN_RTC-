
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {rtc} from '../utils/AppStyles';
import AboutItem from '../utils/AboutItem';
import FadeInView from '../utils/FadeInView';
import about from '../../assets/data/about.json';

export default function About() {
    return (
        <FadeInView style={rtc.containerMain}>
            <ScrollView>
            <View style={rtc.containerColumnCenter}>
                <Image 
                    style={rtc.logoM} resizeMode={'contain'} 
                    source={require('../../assets/images/site/about.jpg')} 
                />
                <Text style={[styles.we_are, rtc.textTitle]}>
                    &#10078;{about.we_are}&#10078;
                </Text>
                <Text style={rtc.textM}>{about.cda}</Text>
                <Text style={rtc.textM}>{about.cdano}</Text>
                <Text style={rtc.textM}>{about.cdadate}</Text>
                <Text> </Text>

                <Text style={[styles.about, rtc.romblon]}>{about.name} 
                    <Text style={rtc.textDesc}> {about.about}</Text>
                </Text>

                <View style={styles.about}> 
                    <Text style={rtc.textHeader}>Contact Details</Text>
                    <AboutItem item='Mobile :' desc={about.mobile} />
                    <AboutItem item='Email :' desc={about.email} />
                    <AboutItem item='Address :' desc={about.address} />
                    <AboutItem item='Website :' desc={about.website} />
                    <AboutItem item='Facebook :' desc={about.facebook} />
                    <AboutItem item='Twitter :' desc={about.twitter} />
                    <AboutItem item='Instagram :' desc={about.instagram} />

                    <Text style={rtc.textHeader}>General Information</Text>
                    <AboutItem item='Type of Cooperative :' desc={about.type} />
                    <AboutItem item='Area of Operation :' desc={about.area} />
                    <AboutItem item='Membership Bond :' desc={about.bond} />
                    <AboutItem item='Members :' desc={about.members} />
                    <AboutItem item='TIN :' desc={about.tin} />
                </View> 
                
                <Text> </Text>
            </View>
            </ScrollView>
        </FadeInView>
    )
}
 
const styles = StyleSheet.create({
    we_are:{
        width: '80%',
        textAlign: 'center',
    },
    about:{
        width: '90%',
        textAlign: 'justify',
    }
});