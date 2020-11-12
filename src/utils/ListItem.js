import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

export default function ListItem({item, desc}) {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>
                {
                    item === '-'
                        ? '    '
                        : ''
                }
                {item}
            </Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#dae4f3',
    },
    item:{
        width: '9%',
        padding: 5,
        color: '#4267b2',
    },
    desc:{
        width: '91%',
        padding: 5,
        color: '#2c455d',
        textAlign: 'justify',
    }
})

 