import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

const URL = 'https://blog.coursify.me/wp-json/wp/v2/media/';

export default function Category({category}) {
  const [media, setMedia] = useState([]);

  const loadData = async () => {
    const reponse = await fetch(URL);
    const data = await reponse.json();
    setMedia(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image style={Styles.image} source={{uri: item.guid.rendered}} />
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>{category.name}</Text>

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.subtitle}>Ver mais</Text>
          <FaIcon name="play" />
        </TouchableOpacity>
      </View>

      <Carousel
        data={media}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={250}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    height: 200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1ABC9C',
  },
  subtitle: {
    margin: 5,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 140,
  },
});
