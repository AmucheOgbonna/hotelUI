import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { gs, colors } from '../../../style'

export default function Extras() {
    const Extras = [
        "Payment at Checkout",
        "WI-FI Network is off by 12:00pm",
        "No swimming after 10:00pm",
        "Not more than two(2) bags of luggage",
        "No singing while showering",
        "No Refunds",
    ]

    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you gp</Text>

            <View style={styles.list}>
                {
                    Extras.map((extra, index) => {
                        return <Text style={styles.listItem} key={index}>&mdash; {extra}</Text>
                    })
                }
            </View>
            <View style={{ marginTop: 16, marginBottom: -49 }}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{ color: "#fff", fontWeight: "700" }}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
    },
    list: {
        marginBottom: 20,
        marginTop: 8,
    },
    listItem: {
        marginTop: 8,
        color: colors.textSec,
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16,
    }
})
