import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Subheader = () => {
    return (

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.avatar} source={require('../assets/fotoPablo.jpg')}></Image>
            <View style={{backgroundColor: 'lightblue', padding: 10, borderRadius: 10, width: '70%' }}>
                <Text style={{ textAlign: 'left', fontWeight: '700', fontSize: 20 }}>
                    Descripcion breve sobre mi
                </Text>
                <Text>
                    Soy estudiante de segundo de DAM y hago atletismo
                </Text>
            </View>
        </View>

    )
}

export default Subheader

const styles = StyleSheet.create({
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
})