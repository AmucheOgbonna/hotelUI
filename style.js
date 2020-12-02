import { StyleSheet } from 'react-native'

export const colors = {
    darkBg: "#222",
    lightBg: "#333",
    darkHl: "#666",
    lightHl: "#888",
    pink: "#ea3372",
    text: "#fff",
    textSec: "#aaa",
    orange: "#F97878"
}

export const gs = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        marginBottom: 8,
        backgroundColor: colors.lightBg,
    },
    sectionTitle: {
        fontWeight: "700",
        color: colors.textSec,
        fontSize: 15,
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.text,
        fontSize: 20,
    },
    subTitle: {
        fontWeight: "600",
        textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 15,
        letterSpacing: 1,
    },
    smalltext: {
        fontSize: 15,
        fontWeight: "800",
        color: colors.text,
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24,
    },
    absoluteFull: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: colors.pink,
    }
})