import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Alert, 
  SafeAreaView, 
} from 'react-native';
// imports de imagem
import imgLantern from './assets/lantern.png';
import imgBackground from './assets/background.png';
import imgDioLogoOn from './assets/dio-logo-on.png';
import imgDioLogoOff from './assets/dio-logo-off.png';

const App = () => {

  const [toggle, setToggle] = useState(() => false);

  const handleToggle = () => {
    setToggle(() => !toggle)
  }

  useEffect(() => {

    //ligar o flash do celular
    // Torch.switchState(toggle);

  }, [toggle]);

  useEffect(() => {

    const subscription = RNShake.addListener(() => {
      setToggle(() => !toggle)
    })

    // remove o listener no desmonte do componente 
    return () => subscription.remove();

  }, []);

  return (
    <SafeAreaView 
      style={toggle ? styles.containerLight : styles.containerDark}
    >
        <StatusBar 
          barStyle={toggle ? 'dark-content' : 'light-content'} 
        />
        <View >
          <TouchableOpacity onPress={handleToggle}>
            <Image 
              style={toggle ? styles.imageLanternOn : styles.imageLanternOff} 
              source={imgLantern} 
            />
            <Image 
              style={toggle ? styles.imageLogoOn : styles.imageLogoOff} 
              source={toggle ? imgDioLogoOn : imgDioLogoOn} 
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s ease',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s ease',
  },
  imageLanternOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
    transform: 'rotate(180deg)',
    transition: 'all .3s ease',
  },
  imageLanternOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    transform: 'translateY(8px)',
    width: 190,
    height: 190,
    transition: 'all .3s ease',
  },
  imageLogoOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    transform: 'translateY(8px)',
    width: 200,
    height: 200,
    transition: 'all .3s ease',
  },
  imageLogoOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 190,
    height: 190,
    transition: 'all .3s ease',
  },
});

export default App;
