import * as React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import {rtc} from '../utils/AppStyles';
import FareCard from '../utils/FareCard';
import data from '../../assets/data/fares.json';
import FadeInView from '../utils/FadeInView';
 
export default function Fares() {

  const fareItem = (origin, destination, rental) => {
    alert(`Rental for ${origin} to ${destination} is ${rental}.`)
  }

  return (
     <FadeInView style={rtc.containerMain}>
       <Text style={[rtc.textTitle,styles.fares]}>Fares</Text>
       <ScrollView>
        <FareCard header={true} origin={'Origin'} destination={'Destination'} rental={'Rental'} />
        <View style={styles.group}>
          {
            data.fares.odiongan.map((fare, index) => {
              return(
                <TouchableHighlight 
                    activeOpacity={0.6} 
                    underlayColor="salmon" 
                    key={index} 
                    style={styles.item} 
                    onPress={() => fareItem('Odiongan', fare.destination, fare.rental)} >
                      <FareCard 
                        key={index}
                        header={false}
                        origin={'Odiongan'} 
                        destination={fare.destination} 
                        rental={fare.rental} />
                </TouchableHighlight>
              )
            })
          }
        </View>
        <View style={styles.group}>
          {
            data.fares.sanagustin.map((fare, index) => {
              return(
                <TouchableHighlight 
                    activeOpacity={0.6} 
                    underlayColor="salmon" 
                    key={index} 
                    style={styles.item} 
                    onPress={() => fareItem('San Agustin', fare.destination, fare.rental)} >
                      <FareCard 
                        key={index}
                        origin={'San Agustin'} 
                        destination={fare.destination} 
                        rental={fare.rental} />
                </TouchableHighlight>
              )
            })
          }
        </View>
        <View style={styles.group}>
          {
            data.fares.tugdan.map((fare, index) => {
              return(
                <TouchableHighlight 
                    activeOpacity={0.6} 
                    underlayColor="salmon" 
                    key={index} 
                    style={styles.item} 
                    onPress={() => fareItem('Tugdan', fare.destination, fare.rental)} >
                      <FareCard 
                        key={index}
                        origin={'Tugdan'} 
                        destination={fare.destination} 
                        rental={fare.rental} />
                </TouchableHighlight>
              )
            })
          }
        </View>
        <View style={styles.group}>
          {
            data.fares.others.map((fare, index) => {
              return(
                <TouchableHighlight 
                    activeOpacity={0.6} 
                    underlayColor="salmon" 
                    key={index} 
                    style={styles.item} 
                    onPress={() => fareItem(fare.origin, fare.destination, fare.rental)} >
                      <FareCard 
                        key={index}
                        origin={fare.origin} 
                        destination={fare.destination} 
                        rental={fare.rental} />
                </TouchableHighlight>
              )
            })
          }
        </View>
        </ScrollView>
     </FadeInView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 30,
  },
  fares:{
    textAlign: 'center',
  },
  group:{
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'dodgerblue',
    margin: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
  },
})

 