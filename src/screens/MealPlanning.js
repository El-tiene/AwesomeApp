import React, { useState } from 'react';
import { Button, View, Text, TextInput, Picker, StyleSheet } from 'react-native';

function HealthGoals() {
  return <Text style={styles.text}>Meal</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HealthGoals;
