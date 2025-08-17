import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutExampleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Body Content</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    flex: 0.1, 
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.8, 
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.1, 
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LayoutExampleScreen;