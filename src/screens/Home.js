import React from 'react';
import {View, Text} from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <View>
      <Navbar />
      <Text>Home</Text>
      <Footer />
    </View>
  );
}
