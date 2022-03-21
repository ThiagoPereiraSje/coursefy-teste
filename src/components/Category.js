import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

const URL_MEDIA = 'https://blog.coursify.me/wp-json/wp/v2/media/';
const URL_POST = 'https://blog.coursify.me/wp-json/wp/v2/posts?categories=';

export default function Category({category}) {
  const [conbined, setConbined] = useState([]);

  const loadMedia = async () => {
    const reponse = await fetch(URL_MEDIA);
    return await reponse.json();
  };

  useEffect(() => {
    const loadPosts = async () => {
      const reponse = await fetch(`${URL_POST}${category.id}`);
      return await reponse.json();
    };

    const conbineData = async () => {
      const data = [];
      const media = await loadMedia();
      const posts = await loadPosts();

      posts.forEach(post => {
        const md = media.find(m => m.id === post.featured_media);

        if (md) {
          data.push({post, media: md});
        }
      });

      setConbined(data);
    };

    conbineData();
  }, [category.id]);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image style={Styles.image} source={{uri: item.media.guid.rendered}} />
        <Text style={Styles.postTitle}>{item.post.title.rendered}</Text>
        <Text style={Styles.postResume}>
          {item.post.excerpt.rendered.substring(0, 150)}
        </Text>

        <TouchableOpacity>
          <Text style={Styles.label}>Leia mais</Text>
        </TouchableOpacity>
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
        data={conbined}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={250}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    height: 300,
    paddingLeft: 5,
    paddingRight: 5,
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
    color: '#348a8d',
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
  postTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1ABC9C',
  },
  postResume: {
    fontSize: 12,
    color: '#999',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#FFA900',
  },
});
