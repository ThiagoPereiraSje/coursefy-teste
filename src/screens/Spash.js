import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Splash() {
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={require('../assets/logo-2.png')} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {},
});
