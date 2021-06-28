// ''' link login and register using navigation, async and wait, ...'''
import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, ImageBackground, Image } from 'react-native'
import { colors, gs } from "../../../style"
import { MaterialIcons, Fontisto } from "@expo/vector-icons"
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class Register extends Component {
    render() {
        return (
            <View>
                <StatusBar translucent backgroundColor={colors.hotPinkD} barStyle="dark-content" />
                <View style={styles.container}>
                    <View style={styles.imageBackground} >
                        <ImageBackground
                            source={require("../../../assets/Rect29.png")}
                            style={styles.background}
                        >
                            <ImageBackground
                                source={require("../../../assets/Rect30.png")}
                                style={styles.Sbackground}>
                                <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                                <View style={styles.logoTextCont}>
                                    <Text style={styles.logoText}>Register</Text>
                                </View>
                            </ImageBackground>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.nameCont}>
                    <Text style={{ ...gs.smallText }}>Full Name</Text>
                    <Text style={{ lineHeight: 20, }}>John Doe</Text>
                </View>
                <View style={[styles.nameCont, { top: 30 }]}>
                    <Text style={{ ...gs.smallText }}>Email Address</Text>
                </View>
                <View style={[styles.nameCont, { top: 50 }]}>
                    <Text style={{ ...gs.smallText }}>Phone Number</Text>
                </View>
                <View style={[styles.nameCont, { top: 70, flexDirection: "row", justifyContent: "space-between" }]}>
                    <Text style={{ ...gs.smallText }}>Password</Text>
                    <MaterialIcons name="visibility-off" size={24} color={colors.ash} />
                </View>
                <View style={[styles.nameCont, { top: 90, flexDirection: "row", justifyContent: "space-between" }]}>
                    <Text style={{ ...gs.smallText }}>Confirm Password</Text>
                    <MaterialIcons name="visibility-off" size={24} color={colors.ash} />
                </View>
                <View style={{ top: 100, flexDirection: "row", justifyContent: "flex-start", left: 35 }}>
                    <Fontisto name="checkbox-passive" size={18} color={colors.ash} />
                    <Text style={{ ...gs.smallText }}>   Confirm Password</Text>
                </View>
                <View style={styles.registerCont}>
                    <View style={styles.register}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, }}>Register</Text>
                    </View>
                    <Text style={{ color: colors.ash, fontSize: 15, }}>Are you already a user?  Login</Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        // top: -50,
    },
    imageBackground: { backgroundColor: colors.hotPinkD, width: "100%", height: "50%" },
    background: {
        width: "100%",
        height: 315,
        top: -90,
        flex: 1,
    },
    Sbackground: {
        resizeMode: "contain",
        width: "100%",
        height: 248,
        alignItems: "center",
        justifyContent: "center",
        top: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 10,
        paddingVertical: 10,
    },
    logoTextCont: {
        paddingTop: 10,

    },
    logoText: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    nameCont: {
        ...gs.line, top: 10, alignSelf: "center"
    },
    registerCont: {
        top: 110,
        justifyContent: "center",
        alignItems: "center",
    },
    register: {
        ...gs.button
    }
})
