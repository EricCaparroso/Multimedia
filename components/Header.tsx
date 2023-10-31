import { View, Text } from 'react-native'
import React from 'react'
import { Button, Pressable,StyleSheet } from 'react-native';

type HeaderProps = {
    setDisplayMyQR: Function;
}

const Header = (props: HeaderProps) => {
  return (
    
    <View style={styles.topContainer}>
    <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
    <View style={styles.rowTopSecondContainer}>
    <Pressable style={styles.buttonruta} onPress={() => props.setDisplayMyQR(true)}>
      <Text style={{...{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}, ...styles.shadoxboxing}}>Mi info</Text>
    </Pressable>
    <Button onPress={() =>props.setDisplayMyQR(false)} title="Mi Repo" color="light-gray" accessibilityLabel='Un botón pal QR' />
    </View>
  </View>

  )
}

const styles = StyleSheet.create({
topContainer: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
  firsttoprowContainer: {
    backgroundColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
  },

  rowTopSecondContainer: {
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonruta: {
    width:'50%',
  },

  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  }


})

export default Header


