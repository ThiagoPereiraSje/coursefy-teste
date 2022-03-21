import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

export default function Category({category}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>{category.name}</Text>

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.subtitle}>Ver mais</Text>
          <FaIcon name="play" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    height: 100,
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
});
