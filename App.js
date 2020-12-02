import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from './style'
import HotelView from './screens/HotelView'
import ProfileView from './screens/ProfileView/Index'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <HotelView /> */}
      <ProfileView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
});
