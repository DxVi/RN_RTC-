import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import {rtc} from '../utils/AppStyles';
import FareCard from '../utils/FareCard';
// import MenuIcon from '../utils/MenuIcon';
import FadeInView from '../utils/FadeInView';
import data from '../../assets/data/fares.json';

export default function Fares({origin}) {

    const Odiongan = () => {
        console.log("<<<<<<<<inside odiongan")
        data.fares.odiongan.map((fare,index) => 
        {
            console.log(index,origin,fare.rental, fare.destination)
            return(
            <View>
                <Text style={{color: 'black'}}>{fare.rental} - {fare.destination}</Text>
            {/* <FareCard key={index} origin={origin} rental={fare.rental} destination={fare.destination}/> */}
            </View>
            )
            })
    }
    const SanAgustin = () => {
        data.fares.sanagustin.map((fare,index) =>
        {return(<FareCard key = {index} origin = {origin} rental = {fare.rental} destination = {fare.destination}/>)})
    }
    const Tugdan = () => {
        data.fares.tugdan.map((fare,index) =>
        {return(<FareCard key = {index} origin = {origin} rental = {fare.rental} destination = {fare.destination}/>)})
    }
    const Others = () => {
        data.fares.others.map((fare,index) => 
        {return(<FareCard key = {index} origin = {origin} rental = {fare.rental} destination = {fare.destination}/>)})
    }

    return (
        <FadeInView style={rtc.containerMain}>

            <Text style={[styles.fare, rtc.textTitle]}>Fares</Text>

            {/* <View style={styles.menuIcons}>
                <MenuIcon menu='Odiongan' icon='location-city' color='#f50' />
                <MenuIcon menu='San Agustin' icon='directions-boat' color='#f50' />
                <MenuIcon menu='Tugdan' icon='local-airport' color='#f50' />
                <MenuIcon menu='Others' icon='airport-shuttle' color='#f50' />
            </View> */}
            
            <ScrollView>
                <View style={styles.group}>
                    <FareCard 
                        header = {true}
                        origin = {'Origin'}
                        destination = {'Destination'}
                        rental = {'Rental'}>
                    </FareCard>
                      {(() => {
                          console.log('origin inside switch>>.',origin)
                        switch(origin){
                            case 'Odiongan'     : Odiongan();   break;
                            case 'San Agustin'  : () => SanAgustin(); break;
                            case 'Tugdan'       : () => Tugdan();     break;
                            case 'Others'       : () => Others();     break;
                        }
                      }
                      )()}
                </View>
            </ScrollView>
        </FadeInView>
    )
}

const styles =  StyleSheet.create({
    menuIcons:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    group:{
        flex: 1,
        width: '100%',
        marginBottom: 10,
    },
    fare:{
        marginTop: 30,
        textAlign: 'center',
    },
});

 