import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';


const ListaEric = () => {
  return (
    <View>
      <Text style={{ color: 'black', fontWeight: "900", textTransform: 'capitalize', fontSize: 17, textAlign: 'center' }}>
            cosas que me gustan mucho:
          </Text>
          <ScrollView style={{ padding: 10 }}>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Comer</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Baloncesto</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Botanica</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Ver anime</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Leer</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>motocros</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Hacer musica</Text>
          </ScrollView>
          <View style={styles.CentrarcodigoQR}>
              <View>
                <QRCode value="https://github.com/EricCaparroso" />
              </View>
            </View>
    </View>
  )
}

export default ListaEric

const styles = StyleSheet.create({
    cosasQmeGustanMuxoEstails: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 15,
        backgroundColor: 'lightblue'
      },
      CentrarcodigoQR: {
        borderWidth: 1,
        alignItems: 'center',
        borderStartWidth: 0,
        borderEndWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: '5%'
      },
})