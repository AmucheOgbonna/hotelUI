import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo, Ionicons, FontAwesome, Feather, FontAwesome5 } from '@expo/vector-icons'
import { gs, colors } from "../../../style"

export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>
            <View style={styles.amenitiesContainer}>
                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Feather name="wifi" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentiyName}>WI-FI</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentiyName}>Hotel Restaurant</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <FontAwesome5 name="swimmer" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentiyName}>Swimming Pools</Text>
                </View>


                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Entypo name="drink" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentiyName}>Bar</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Ionicons name="ios-car" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentiyName}>Parking Spot</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Feather name="speaker" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentiyName}>Night Club</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    amenitiesContainer: {
        ...gs.rowBetween,
        marginHorizontal: 16,
        marginTop: 16,
        flexWrap: 'wrap',
    },
    amentityContainer: {
        marginVertical: 12,
        width: 85,
        alignItems: "center",
    },
    amentity: {
        ...gs.center,
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        backgroundColor: "#444",
    },
    amentiyName: {
        marginTop: 6,
        fontWeight: "600",
        fontSize: 12,
        color: colors.lightHl,
        textAlign: "center",
    }
})
