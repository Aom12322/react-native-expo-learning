import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>ค่าปัจจุบัน: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="เพิ่ม" onPress={() => setCount(count + 1)} />
        <Button title="ลด" onPress={() => setCount(Math.max(0, count - 1))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
  },
});
