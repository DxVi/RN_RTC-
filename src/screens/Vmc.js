import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {rtc} from './AppStyles';
import ListItem from '../utils/ListItem';
import data from '../../assets/data/vmc.json';
import FadeInView from '../utils/FadeInView';

export default function Vmc() {
    return (
        <FadeInView style={rtc.containerMain}>
            <ScrollView>
            <View style={styles.container}>
                <Text style={rtc.textTitle}>Vision</Text>
                <Text style={[rtc.textHeader,styles.justify]}>{data.vmc.vision}</Text>
            </View>

            <View style={styles.container}>
                <Text style={rtc.textTitle}>Mission</Text>
                <Text style={[rtc.textHeader,styles.justify]}>{data.vmc.mission1}</Text>

                <ListItem item={'i.'} desc={data.vmc.mission2} />
                <ListItem item={'ii.'} desc={data.vmc.mission3} />
                <ListItem item={'iii.'} desc={data.vmc.mission4} />
            </View>

            <View style={styles.container}>
                <Text style={rtc.textTitle}>Core Values</Text>
                <Text style={[rtc.textHeader,styles.justify]}>{data.vmc.corevalues}</Text>
            </View>

            <View style={styles.container}>
                <Text style={rtc.textTitle}>Purposes</Text>
                <Text style={rtc.textHeader}>RTC is organized to :</Text>
                {
                    data.purposes.map((purpose) =>
                        <ListItem key={purpose.item+purpose.desc} item={purpose.item} desc={purpose.desc} />
                    )
                }
            </View>

            <View style={styles.container}>
                <Text style={rtc.textTitle}>Goals</Text>
                <Text style={[rtc.textHeader,styles.justify]}>Improve quality of life, employment and enterprise development of its members; It shall aim:</Text>
                {
                    data.goals.map((goal) =>
                        <ListItem key={goal.item} item={goal.item} desc={goal.desc} />
                    )
                }
            </View>
            </ScrollView>
        </FadeInView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    justify:{
        textAlign: 'justify',
    }

})
