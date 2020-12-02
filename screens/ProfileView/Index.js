import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import Header from "./component/Header"
import { gs, colors } from "../../style"
import Stats from '../ProfileView/component/Stats'
import About from '../ProfileView/component/About'
import Location from './component/Location'
import Photos from './component/Photos'

export default class Index extends Component {
    state = {
        user: {},
        isloading: true,
    }
    async componentDidMount() {
        try {
            let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
            let users = await res.json()

            this.setState({ user: users.results[0] }, () => {
                this.setState({ isloading: false })
            })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        if (this.state.isloading) {
            return (
                <View
                    style={[gs.center, styles.container]}>
                    <StatusBar barStyle="light-content" />
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (

            <ScrollView style={styles.container}>
                <StatusBar style="auto" barStyle="light-content" />

                <Header user={this.state.user} />
                <Stats />
                <About />
                <Location />
                <Photos />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBg
    }
})
