import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Category from '../components/Category';

const URL = 'https://blog.coursify.me/wp-json/wp/v2/categories/';

export default function Home() {
  const [categories, setCategories] = useState([]);

  const loadData = async () => {
    const reponse = await fetch(URL);
    const data = await reponse.json();
    setCategories(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView style={Styles.container}>
      <Navbar />
      <View>
        {categories.map((ct, i) => (
          <Category key={i} category={ct} />
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
