import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { gs } from "../../../style"

export default function header() {
    return (
        <View >
            <Image source={require('../../../assets/hotel1.jpg')} style={{ width: "100%", height: 300 }} />
            <View style={styles.topButton}>
                <AntDesign name="close" size={24} color="#fff" />
                <View style={gs.rowCenter} >
                    <AntDesign name="save" size={24} style={styles.topButtonRight} />
                    <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
                    <Entypo name="dots-three-vertical" size={24} style={styles.topButtonRight} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topButton: {
        ...gs.rowBetween,
        position: "absolute",
        top: 40,
        left: 32,
        right: 32,
    },
    topButtonRight: {
        color: "#fff",
        marginLeft: 12,
    }
})
