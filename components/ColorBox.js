// components/ColorBox.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = props => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };
  const textStyle={
    color: props.colorText,
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.text, textStyle]}>
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    padding:10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
    fontSize:12,
  },
});

export default ColorBox;