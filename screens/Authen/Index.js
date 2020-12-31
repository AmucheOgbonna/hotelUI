import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Login from "./Components/Login"
export default function Index() {
    return (
        <ScrollView styles={styles.container}>
            <StatusBar barStyle="auto" />
            <Login />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
