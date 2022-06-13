import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import imageOn from './assets/icons/eco-light.png';
import imageOff from './assets/icons/eco-light-off.png';
import dio from './assets/icons/logo-dio.png';
import dioWhite from './assets/icons/logo-dio-white.png';

export default function App() {
  const toggle = true; //false
  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => {}}>
        <Image style={toggle ? styles.lightingOn : styles.lightingOff} source={toggle ? imageOn : imageOff}/>
        <Image style={styles.dioLogo} source={toggle ? dio : dioWhite}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  lightingOff: {
    tintColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 100,
    height: 100
  }
});
