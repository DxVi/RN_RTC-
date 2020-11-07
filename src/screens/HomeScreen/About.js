import React from 'react'
import { Image, Text, View } from 'react-native'
import data from '../../../assets/data/RTC.json';
import {Container, RTC} from '../../../AppStyles';
import ListItem from './ListItem';

export default function About() {
    return (
        <View style={Container.column}>
            <Image style={RTC.logoM} resizeMode={'contain'} source={require('../../../assets/images/site/about.jpg')} />
            <Text style={RTC.title}>&#10078;{data.main.title}&#10078;</Text>
            <Text style={RTC.text}>{data.main.cda}</Text>
            <Text style={RTC.text}>{data.main.cdano}</Text>
            <Text style={RTC.text}>{data.main.cdadate}</Text>

            <View style={Container.normal}>
                <Text style={RTC.romblon}>{data.main.name} 
                    <Text style={RTC.desc}> {data.main.about}</Text>
                </Text>
            </View>

            <View style={Container.normal}>
                <Text style={RTC.header}>Contact Details</Text>
                <Text> </Text>
                <ListItem item='Mobile :' desc={data.contacts.mobile} />
                <ListItem item='Email :' desc={data.contacts.email} />
                <ListItem item='Address :' desc={data.contacts.address} />
                <ListItem item='Website :' desc={data.contacts.website} />
                <ListItem item='Facebook :' desc={data.contacts.facebook} />
                <ListItem item='Twitter :' desc={data.contacts.twitter} />
                <ListItem item='Instagram :' desc={data.contacts.instagram} />
            </View>

            <View style={Container.normal}>
                <Text style={RTC.header}>General Information</Text>
                <Text> </Text>
                <ListItem item='Type of Cooperative :' desc={data.geninfo.type} />
                <ListItem item='Area of Operation :' desc={data.geninfo.area} />
                <ListItem item='Bond of Membership :' desc={data.geninfo.bond} />
                <ListItem item='Members :' desc={data.geninfo.members} />
                <ListItem item='TIN :' desc={data.geninfo.tin} />
            </View>
        </View>
    )
}
 