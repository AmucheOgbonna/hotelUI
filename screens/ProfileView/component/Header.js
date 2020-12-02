import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { gs, colors } from "../../../style"
import { Ionicons, Entypo } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class Header extends Component {
    render() {
        const user = this.props.user
        const name = `${user.name.first} ${user.name.last}`
        return (

            <LinearGradient colors={[colors.orange, colors.pink]} start={[0, 0]} end={[1, 1]}>
                <View style={{ marginHorizontal: 32, paddingVertical: 44 }}>
                    <View style={gs.rowBetween}>
                        <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                        <Entypo name="dots-three-vertical" color={colors.text} size={24} />
                    </View>
                    <View style={styles.imageContainer}>
                        <View>
                            <View style={styles.check}>
                                <Ionicons name="md-checkmark" size={20} color={Colors.pink} />
                            </View>
                            <Image source={{ uri: user.picture.large }} style={{ width: 100, height: 100, borderRadius: 32 }} />
                        </View>
                    </View>
                    <View style={[gs.center, { marginVertical: 12 }]}>
                        <Text style={gs.title}>{name}</Text>
                        <Text style={[gs.subTitle, { marginTop: 8 }]}>Traveler/ Blogger</Text>
                        <TouchableOpacity style={styles.follow}>
                            <Entypo name="plus" size={20} color="rgba(255,255,255,0.6)" />
                            <Text style={styles.follwText}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        ...gs.center,
        marginTop: 16,
        shadowColor: colors.darkBg,
        shadowOffset: { height: 3, width: 1 },
        shadowOpacity: 0.5,
        elevation: 3,
        shadowRadius: 10,
        elevation: 8,
    },
    check: {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        position: "absolute",
        zIndex: 1,
        right: -10,
        bottom: 16,
        shadowColor: colors.darkBg,
        elevation: 3,
        shadowOffset: { width: 3, height: 1 },
        shadowOpacity: 0.5,
    },
    follow: {
        ...gs.button,
        ...gs.rowCenter,
        paddingVertical: 6,
        paddingHorizontal: 24,
        marginTop: 10,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2,
    },
    follwText: {
        fontSize: 16,
        color: colors.text,
        fontWeight: "600",
        marginLeft: 4,
    }
})
