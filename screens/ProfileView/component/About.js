import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../../../style'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>
                Some weeks ago I spent some time researching
                about how to apply shadows on iOS and Android
                on a react-native project. It ended being a
                bit messy topic, with several options to use
                and not being able to get the same results on
                both platforms, so here are the conclusions of
                my research.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    about: {
        fontSize: 15,
        fontWeight: "800",
        color: colors.darkHl,
        marginTop: 6,
        lineHeight: 22,
    }
})
