import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const URL = 'https://blog.coursify.me/wp-json/wp/v2/categories/';

export default function Home() {
  const [categories, setCategories] = useState([]);

  const loadData = async () => {
    const reponse = await fetch(URL);
    const json = await reponse.json();
    console.log('data: ', json[0].name);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView>
      <Navbar />
      <View style={Styles.container}>
        <Text>Home</Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    height: 600,
  },
});
