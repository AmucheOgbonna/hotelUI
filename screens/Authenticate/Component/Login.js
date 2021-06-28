// ''' link login and register'''
import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import { colors, gs } from '../../../style'
import { createStackNavigator } from '@react-navigation/stack'
import Register from "./Register"


export default class Login extends Component {
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
                                    <Text style={styles.logoText}>Welcome back</Text>
                                </View>
                            </ImageBackground>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.emailCont}>
                    <Text style={{ ...gs.smallText }}>Email or Phone Number</Text>
                    <Text style={{ lineHeight: 35, }}>anyakogodwin@gmail.com</Text>
                </View>
                <View style={styles.passCont}>
                    <Text style={{ ...gs.smallText }}>Password</Text>
                </View>
                <View style={styles.forgetCont}>
                    <Text style={{ ...gs.smallText }}>Forgot Password?</Text>
                </View>
                <View style={styles.loginCont}>
                    <TouchableOpacity
                        style={styles.logIn}
                        onPress={() => { this.props.navigation.navigate("Register") }} >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, }}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{ color: colors.ash, fontSize: 15, }}>New User?  Register</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        top: -50,
    },
    imageBackground: { backgroundColor: colors.hotPinkD, width: "100%", height: "50%" },
    background: {
        width: "100%",
        height: 315,
        flex: 1,
    },
    Sbackground: {
        resizeMode: "contain",
        width: "100%",
        height: 248,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoTextCont: {
        paddingVertical: 10
    },
    logoText: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    emailCont: {
        top: 120,
        alignSelf: "center",
        ...gs.line,
    },
    passCont: {
        top: 170,
        alignSelf: "center",
        ...gs.line,
    },
    forgetCont: {
        top: 180,
        alignSelf: "flex-end",
        paddingHorizontal: 35,
        paddingVertical: 1,
    },
    loginCont: {
        top: 210,
        justifyContent: "center",
        alignItems: "center",
    },
    logIn: {
        ...gs.button
    }
})
