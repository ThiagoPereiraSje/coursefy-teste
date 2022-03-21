import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Navbar() {
  return (
    <View style={Styles.container}>
      <Image source={require('../assets/logo-2.png')} />
      <TouchableOpacity style={Styles.button}>
        <Text>B</Text>
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
});
