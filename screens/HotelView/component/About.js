import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from "../../../style"

const hotel = {
    name: "Maamu's Place Enugu",
    price: "$960.00",
    location: "Nigeria",
    about: "lorem Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes."

}

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>
            <View style={gs.divider} />
            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    info: {
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 4,
    },
    about: {
        fontWeight: "600",
        fontSize: 13,
        color: colors.textSec,
        lineHeight: 20,
        marginTop: 6
    }
})
