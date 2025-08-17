import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxManagerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default FlexboxManagerScreen;