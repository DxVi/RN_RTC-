
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import about from '../../../assets/data/about.json';
import {rtc} from '../../../AppStyles';
import FadeInView from '../../utils/FadeInView';
import ListItem from './ListItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {

    

    return (
        <FadeInView style={rtc.containerMain}>
            <ScrollView>
            <View style={rtc.containerColumnCenter}>
                <Image 
                    style={rtc.logoM} resizeMode={'contain'} 
                    source={require('../../../assets/images/site/about.jpg')} 
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
                    <ListItem item='Mobile :' desc={about.mobile} />
                    <ListItem item='Email :' desc={about.email} />
                    <ListItem item='Address :' desc={about.address} />
                    <ListItem item='Website :' desc={about.website} />
                    <ListItem item='Facebook :' desc={about.facebook} />
                    <ListItem item='Twitter :' desc={about.twitter} />
                    <ListItem item='Instagram :' desc={about.instagram} />

                    <Text style={rtc.textHeader}>General Information</Text>
                    <ListItem item='Type of Cooperative :' desc={about.type} />
                    <ListItem item='Area of Operation :' desc={about.area} />
                    <ListItem item='Membership Bond :' desc={about.bond} />
                    <ListItem item='Members :' desc={about.members} />
                    <ListItem item='TIN :' desc={about.tin} />
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