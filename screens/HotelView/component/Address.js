import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import { gs, colors } from "../../../style"

export default function Address() {
    return (
        <View>
            <View style={{ backgroundColor: "#000" }}>
                <Image source={require('../../../assets/map.png')} style={{ height: 200, opacity: 0.2, }} />
            </View>
            <View style={styles.addressContainer}>
                <Image source={require('../../../assets/pin.png')} style={{ width: 40, height: 40 }} />
                <View style={{ marginTop: 14, marginLeft: 6 }}>
                    <Text style={gs.sectionTitle}>Address</Text>
                    <Text style={styles.address}>{`1523 Enugu Street, Enugu\n 100100 Nigeria`}</Text>

                    <View style={{ marginTop: 16 }}>
                        <TouchableOpacity style={styles.checkButton}>
                            <Text style={gs.smalltext}>Check it</Text>
                            <Entypo name="chevron-right" size={20} color="#fff" style={{ marginLeft: 16 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addressContainer: {
        ...gs.absoluteFull,
        paddingHorizontal: 32,
        paddingVertical: 16,
        flexDirection: "row",
    },
    address: {
        ...gs.smalltext,
        color: colors.darkHl,
        marginTop: 4,
        letterSpacing: 1,
        lineHeight: 15,
    },
    checkButton: {
        ...gs.button,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf: "flex-start",
        flexDirection: "row",
    }
})
