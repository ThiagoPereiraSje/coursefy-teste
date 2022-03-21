/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RouterProvider from './src/features/route-context';
import {withProviders} from './src/utils/react';
import Navigator from './Navigator';

const providers = [RouterProvider];

export default function App() {
  return withProviders(
    <SafeAreaView style={Styles.container}>
      <Navigator />
    </SafeAreaView>,
    providers,
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
