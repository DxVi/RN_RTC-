import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function MenuIcon({menu, icon, color}) {
    return (
        <View style={styles.container}>
            <Icon name={icon} color={color} raised onPress={() => alert(menu)}/>
            <Text>{menu}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
