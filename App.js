import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Alert, Platform } from 'react-native';
import imageOn from './assets/icons/eco-light.png';
import imageOff from './assets/icons/eco-light-off.png';
import dio from './assets/icons/logo-dio.png';
import dioWhite from './assets/icons/logo-dio-white.png';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

export default function App() {
  const [toggle, setToggle] = useState(true); //false
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    async function qualquer() {
      try {
        await Torch.switchState(toggle);
      } catch(err) {
        console.log(err);
      }
    }

    qualquer()
      //Liga o flash do celular
      // setToggle(!toggle);
  }, [toggle]);

  useEffect(() => {
    // quando o cell for chacoalhado, mudará o toggle
    // Shake.addListener(()=> {
    //   setToggle(oldToggle => !oldToggle);
    // });

    //essa função vai ser chamada quando componente
    //for ser desmontado
    // Shake.removeSubscription(() => {});

    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });    
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleChangeToggle}>
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
