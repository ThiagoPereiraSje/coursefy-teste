import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import sanitizeHtml from 'sanitize-html';

const POST_ID = 3446;
const URL_POST = 'https://blog.coursify.me/wp-json/wp/v2/posts/';
const URL_MEDIA = 'https://blog.coursify.me/wp-json/wp/v2/media/';
const options = {allowedTags: []};

export default function Post() {
  const [post, setPost] = useState();
  const [media, setMedia] = useState();

  const loadMedia = async mediaId => {
    const reponse = await fetch(`${URL_MEDIA}${mediaId}`);
    const data = await reponse.json();
    setMedia(data);
  };

  useEffect(() => {
    const loadPost = async () => {
      const reponse = await fetch(`${URL_POST}${POST_ID}`);
      const data = await reponse.json();
      await loadMedia(data.featured_media);
      setPost(data);
    };

    loadPost();
  }, []);

  return (
    <ScrollView>
      <Navbar />
      <View style={Styles.container}>
        <Text style={Styles.title}>{post?.title?.rendered}</Text>
        <Image style={Styles.image} source={{uri: media?.guid?.rendered}} />
        <Text style={Styles.content}>
          {sanitizeHtml(post?.content?.rendered, options)}
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1ABC9C',
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: '90%',
    height: 140,
    borderRadius: 10,
  },
  content: {
    padding: 10,
  },
});
