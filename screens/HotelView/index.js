import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../style'
import About from './component/About'
import Address from './component/Address'
import Amenities from './component/Amenities'
import Bookmark from './component/Bookmark'
import Extras from './component/Extras'
import Header from './component/header'
import Stats from './component/Stats'


export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header />
            <View>
                <Bookmark />
                <About />
                <Stats />
                <Amenities />
                {/* <Address /> */}
                <Extras />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    }
})
