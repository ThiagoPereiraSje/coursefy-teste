/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Footer from './src/components/Footer';
// import Navbar from './src/components/Navbar';
// import Splash from './src/screens/Spash';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Footer />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
