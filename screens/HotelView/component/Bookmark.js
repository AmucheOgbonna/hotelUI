import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from "@expo/vector-icons"
import { gs, colors } from "../../../style"

export default function Bookmark() {
    return (
        <View style={styles.bookmark}>
            <Feather name="bookmark" size={20} color={colors.pink} />
        </View>
    )
}

const styles = StyleSheet.create({
    bookmark: {
        position: "absolute",
        width: 47,
        height: 47,
        right: 40,
        top: -30,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 47 / 2,
        zIndex: 1,
    }
})
