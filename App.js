import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
} from 'react-native';
// imports de imagem
import imgLantern from './assets/lantern.png';
import imgBackground from './assets/background.png';
import imgDioLogoOn from './assets/dio-logo-on.png';
import imgDioLogoOff from './assets/dio-logo-off.png';

export default function App() {

  const [toggle, setToggle] = useState(() => false);

  return (
    <View style={toggle ? styles.containerLight : styles.containerDark}>
      <TouchableOpacity onPress={() => {setToggle(!toggle)}}>
        <Image 
          style={toggle ? styles.imageOn : styles.imageOff} 
          source={toggle ? imgLantern : imgLantern} 
        />
        <Image 
          style={toggle ? styles.imageOn : styles.imageOff} 
          source={toggle ? imgDioLogoOn : imgDioLogoOn} 
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundImage: imgBackground,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  imageOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 200,
    height: 200,
  },
});
