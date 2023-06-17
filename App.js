// App.js

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


import Example from './components/Exercise2';
import Exo3 from './components/Exo3';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Example/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: 'grey',
    padding: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  boxContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
