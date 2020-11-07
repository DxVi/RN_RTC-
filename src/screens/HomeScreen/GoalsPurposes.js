import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, RTC} from '../../../AppStyles';
import data from '../../../assets/data/RTC.json';

export default function GoalsPurposes() {
    return (
        <View style={Container.normal}>

            <Text style={RTC.header}>Purposes</Text>
            <View style={styles.goalsPurposes}>
                <Text style={RTC.item}>RTC is organized to :</Text>
                {
                    data.goalsPurposes.purposes.map((purpose) =>
                        <Text key={purpose.desc} style={RTC.item}>
                            {
                               purpose.item === '-' 
                               ? <Text>     {purpose.item}   </Text>
                               : <Text>{purpose.item}   </Text> 
                            }
                            <Text style={RTC.desc}>{purpose.desc}</Text>
                        </Text>
                    )
                }
            </View>

            <Text style={RTC.header}>Goals</Text>
            <View style={styles.goalsPurposes}>
                <Text style={RTC.item}>Improve quality of life, enterprise development and employment of its members; It shall aim:</Text>
                {
                    data.goalsPurposes.goals.map((goal) =>
                        <Text key={goal.desc} style={RTC.item}>{goal.item}  <Text style={RTC.desc}>{goal.desc}</Text>
                        </Text>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    goalsPurposes:{
        // width: '95%',
        marginBottom: 20,
        marginLeft: 10,
        textAlign: 'justify',
    }, 
})
