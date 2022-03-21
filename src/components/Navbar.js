import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {
  return (
    <View style={Styles.container}>
      <Image source={require('../assets/logo-2.png')} />
      <TouchableOpacity style={Styles.button}>
        <FaIcon style={Styles.icon} name="align-justify" />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#3CC6AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 18,
  },
});
