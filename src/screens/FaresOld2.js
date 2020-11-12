import * as React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {rtc} from '../utils/AppStyles';
import FareCard from '../utils/FareCard';
import data from '../../assets/data/fares.json';

const Odiongan = () => (
    <View style={rtc.containerMain}>
        <Text style={[styles.fare, rtc.textTitle]}>Fares</Text>
        <FareCard header={true} origin={'Origin'} destination={'Destination'} rental={'Rental'}/>
        {
         data.fares.odiongan.map((fare,index) => 
         {return(<FareCard key={index} origin={'Odiongan'} rental={fare.rental} destination={fare.destination}/>)})
        }
    </View>
);
const SanAgustin = () => (
    <View>
        <Text style={[styles.fare, rtc.textTitle]}>Fares</Text>
        <FareCard header={true} origin={'Origin'} destination={'Destination'} rental={'Rental'}/>
        {
         data.fares.sanagustin.map((fare,index) => 
         {return(<FareCard key={index} origin={'San Agustin'} rental={fare.rental} destination={fare.destination}/>)})
        }
    </View>
);
const Tugdan = () => (
    <View>
        <Text style={[styles.fare, rtc.textTitle]}>Fares</Text>
        <FareCard header={true} origin={'Origin'} destination={'Destination'} rental={'Rental'}/>
        {
         data.fares.tugdan.map((fare,index) => 
         {return(<FareCard key={index} origin={'Tugdan'} rental={fare.rental} destination={fare.destination}/>)})
        }
    </View>
);
const Others = () => (
    <View>
        <Text style={[styles.fare, rtc.textTitle]}>Fares</Text>
        <FareCard header={true} origin={'Origin'} destination={'Destination'} rental={'Rental'}/>
        {
         data.fares.others.map((fare,index) => 
         {return(<FareCard key={index} origin={'Others'} rental={fare.rental} destination={fare.destination}/>)})
        }
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Fares() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'odiongan', title: 'Odiongan' },
    { key: 'sanagustin', title: 'San Agustin' },
    { key: 'tugdan', title: 'Tugdan' },
    { key: 'others', title: 'Others' },
  ]);

  const renderScene = SceneMap({
    odiongan: Odiongan,
    sanagustin: SanAgustin,
    tugdan: Tugdan,
    others: Others,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  fare:{
    marginTop: 30,
    textAlign: 'center',
},
});