import { View, Text } from 'react-native'
import React from 'react'
import { Button, Pressable,StyleSheet } from 'react-native';

type HeaderProps = {
    setProyecto: Function;
    setOscuro: Function
}

const Header = (props: HeaderProps) => {
  return (
    
    <View style={styles.topContainer}>
    <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
    <View style={styles.rowTopSecondContainer}>
    <Button onPress={() => props.setProyecto(true)} title='Repo Pablo' color={"lightgreen"} />
    <Button onPress={() => props.setProyecto(false)} title="Repo Eric" color={"lightgreen"} />
    <Button onPress={() => props.setOscuro(false)} title='Oscuro' color={"lightgreen"} />
    <Button onPress={() => props.setOscuro(true)} title='Normal' color={"lightgreen"}></Button>
    </View>
  </View>

  )
}

const styles = StyleSheet.create({
topContainer: {
    width: '100%',
  },
  firsttoprowContainer: {
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
    color: 'white',
  },

  rowTopSecondContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch'
  },


})

export default Header