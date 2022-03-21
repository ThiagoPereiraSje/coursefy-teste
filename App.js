/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Splash from './src/screens/Spash';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Splash />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
