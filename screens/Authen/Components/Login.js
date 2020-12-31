import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { gs, colors } from "../../../style"

export default function Login() {
    return (

        <ImageBackground source={require("../../../assets/Rect29.png")} style={styles.container}>
            <Text>My name</Text>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 100,
        backgroundColor: "green",
        flex: 1,
    }
})
