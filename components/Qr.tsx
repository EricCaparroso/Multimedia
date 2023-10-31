import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

const Qr = () => {
  return (
    <View>
       <View style={styles.CentrarcodigoQR}>
        <View>
          <QRCode value="https://github.com/adhernea" />
        </View>
      </View>
    </View>
  )
}

export default Qr

const styles = StyleSheet.create({
      CentrarcodigoQR: {
        justifyContent: 'center',
        borderWidth: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
      },
      
})