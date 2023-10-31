import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Lista from './components/Lista';
import Qr from './components/Qr';


export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>

      <Header setDisplayMyQR={setDisplayMyQR}></Header>
      {
      displayMyQR?


      <View style={styles.bodystails}>
        <View>

        <Subheader></Subheader>
        </View>
        <Lista></Lista>
         
        
      </View>
      :
        <View style={styles.bodystails}>

      
        <Qr></Qr>
    
        </View>
      }

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodystails: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85%'
  },
  
 
 
});
