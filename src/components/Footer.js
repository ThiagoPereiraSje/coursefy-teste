import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';

const URL = 'https://coursify.me/';

export default function Footer() {
  const openLink = async () => {
    const suported = await Linking.canOpenURL(URL);

    if (suported) {
      await Linking.openURL(URL);
    } else {
      Alert.alert(`Não é possível abrir o endereço: ${URL}`);
    }
  };

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require('../assets/logo-coursify-w.png')}
      />

      <Text style={Styles.paragraph}>
        O Coursify.me é uma plataforma de ensino a distância, onde qualquer
        pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
      </Text>

      <TouchableOpacity style={Styles.button} onPress={openLink}>
        <Text style={Styles.label}>Quero conhecer a plataforma!</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3CC6AA',
  },
  logo: {
    margin: 10,
  },
  paragraph: {
    color: 'white',
    textAlign: 'center',
    margin: 5,
  },
  button: {
    borderRadius: 40,
    width: '70%',
    height: 35,
    backgroundColor: '#FDA506',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  label: {
    color: 'white',
  },
});
