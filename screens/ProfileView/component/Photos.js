import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../../../style'

const photos = [
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
    require('../../../assets/hotel1.jpg'),
]

export default function Photos() {
    return (
        <View style={{
            marginTop: 6,
            paddingHorizontal: 45,
            paddingVertical: 24,
            marginBottom: 8,
            backgroundColor: colors.lightBg,
        }}>
            <Text style={gs.sectionTitle}>My Photos</Text>
            <View style={styles.photosContainer}>
                {
                    photos.map((photos, index) => {
                        return (
                            <Image source={photos} key={index} style={[styles.photo, {
                                marginRight: (index + 1) % 3 === 0 ? 0 : 12
                            }]} />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16
    },
    photo: {
        width: 80, height: 80, marginBottom: 12, borderRadius: 8
    }
})
