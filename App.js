import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from "./style"
import Index from "./screens/Authenticate/Index"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}
      <Index />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
