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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#dae4f3',
        marginBottom: 5,
        padding: 5,
    },
    item:{
        width: '7%',
        marginLeft: 5,
        marginRight: 5,
        color: '#4267b2',
    },
    desc:{
        width: '93%',
        color: '#2c455d',
        textAlign: 'justify',
        paddingRight: 5,
    }
})

 