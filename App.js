import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors, gs } from './style'
import Authen from "./screens/Authen"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Authen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",

  },
});
