import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { gs, colors } from "../../../style"
import { Entypo } from '@expo/vector-icons'

export default function Location() {
    return (
        <View style={styles.container}>
            <View style={{ width: 100, height: 100 }}>
                <Image source={require("../../../assets/location.jpg")} resizeMode="center" style={[styles.image, { flex: 1 }]} />
            </View>
            <View style={{ flex: 1, marginLeft: -20 }}>
                <Text style={styles.location}>Switerland</Text>
                <Text style={styles.distance}>Far away</Text>
            </View>
            <Entypo name="chevron-right" size={24} color={colors.darkHl} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        backgroundColor: colors.lightBg,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    location: {
        fontSize: 18,
        color: colors.text,
        fontWeight: "800",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 200,
    },
    distance: {
        ...gs.smalltext,
        color: colors.darkHl,
        textTransform: "uppercase"
    }
})
