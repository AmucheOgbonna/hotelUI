import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { colors } from '../../style'
import Login from "./Components/Login"
export default function Index() {
    return (
        <View styles={styles.container}>
            <StatusBar barStyle="auto" />
            <Login />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {


    }
})
