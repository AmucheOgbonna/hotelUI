import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { gs, colors } from "../../../style"

export default function Login() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.greetCont}>
                <ImageBackground source={require("../../../assets/Rect29.png")} style={styles.imagegreetCont} />
                <View style={styles.smallerCont}>
                    <Text>My Name</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
    },
    greetCont: {
        backgroundColor: colors.black,
    },
    imagegreetCont: {
        width: "100%",
    }
})
