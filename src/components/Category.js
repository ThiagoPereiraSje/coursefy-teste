import React from 'react';
import {View, Text} from 'react-native';

export default function Category({category}) {
  return (
    <View>
      <Text>{category.name}</Text>
    </View>
  );
}
