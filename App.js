import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from './style'
import Authen from "./screens/Authen/Index"

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
    backgroundColor: colors.lightWhite

  },
});
