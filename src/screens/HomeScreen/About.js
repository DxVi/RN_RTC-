import React from 'react'
import { Image, Text, View } from 'react-native'
import data from '../../../assets/data/RTC.json';
import {Container, RTC} from '../../../AppStyles';

export default function About() {
    return (
        <View style={Container.basic}>
            <Image style={RTC.logoM} resizeMode={'contain'} source={require('../../../assets/images/site/about.jpg')} />
            <Text style={RTC.title}>&#10078;{data.main.title}&#10078;</Text>
            <Text style={RTC.text}>{data.main.cda}</Text>
            <Text style={RTC.text}>{data.main.cdano}</Text>
            <Text style={RTC.text}>{data.main.cdadate}</Text>

            <View style={Container.normal}>
                <Text style={RTC.romblon}>{data.main.name} 
                    <Text style={RTC.description}> {data.main.about}</Text>
                </Text>
            </View>

            <View>
                <View style={Container.normal}>
                    <Text style={RTC.header}>Contact Details</Text>
                    <Text> </Text>
                    <Text style={RTC.item}>Mobile       : <Text style={RTC.description}>{data.contacts.mobile}</Text></Text>
                    <Text style={RTC.item}>Email        : <Text style={RTC.description}>{data.contacts.email}</Text></Text>
                    <Text style={RTC.item}>Address      : <Text style={RTC.description}>{data.contacts.address}</Text></Text>
                    <Text style={RTC.item}>Website      : <Text style={RTC.description}>{data.contacts.website}</Text></Text>
                    <Text style={RTC.item}>Facebook     : <Text style={RTC.description}>{data.contacts.facebook}</Text></Text>
                    <Text style={RTC.item}>Twitter      : <Text style={RTC.description}>{data.contacts.twitter}</Text></Text>
                    <Text style={RTC.item}>Instagram    : <Text style={RTC.description}>{data.contacts.instagram}</Text></Text>
                </View>

                <View style={Container.normal}>
                    <Text style={RTC.header}>General Information</Text>
                    <Text> </Text>
                    <Text style={RTC.item}>Type of Cooperative : <Text style={RTC.description}>{data.geninfo.type}</Text></Text>
                    <Text style={RTC.item}>Area of Operation : <Text style={RTC.description}>{data.geninfo.area}</Text></Text>
                    <Text style={RTC.item}>Bond of Membership : <Text style={RTC.description}>{data.geninfo.bond}</Text></Text>
                    <Text style={RTC.item}>Members : <Text style={RTC.description}>{data.geninfo.members}</Text></Text>
                    <Text style={RTC.item}>TIN : <Text style={RTC.description}>{data.geninfo.tin}</Text></Text>
                </View>
            </View>
        </View>
    )
}
 