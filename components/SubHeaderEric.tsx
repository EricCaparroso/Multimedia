import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SubHeaderEric = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.avatar} source={require('../assets/adaptive-icon.png')}></Image>
            <View style={{backgroundColor: 'lightblue', padding: 10, borderRadius: 10, width: '70%' }}>
                <Text style={{ textAlign: 'left', fontWeight: '700', fontSize: 20 }}>
                    Texto a poner
                </Text>
                <Text>
                    Texto a poner
                </Text>
            </View>
        </View>
  )
}

export default SubHeaderEric

const styles = StyleSheet.create({
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
})