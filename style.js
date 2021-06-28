import { StyleSheet } from "react-native"

export const colors = {
    white: "rgba(255, 255, 255, 1.0)",
    hotPinkL: "rgba(201,33,184,1.0)",
    hotPinkD: "rgba(201,33,187,1.0)",
    ash: "rgba(0,0,0,0.6)",
    lightblack: "rgba(0,0,0, 0.25)",
    yellow: 'rgba(232, 223, 17, 1.0)',
    lightash: "rgba(229, 229, 229, 1.0)",
    softPink: "rgba(250,154,242,1.0)",
    transperent: "rgba(0, 0, 0, 0.02)",
    ashD: "rgba(0, 0, 0, 0.3)",
    black: "rgba(0, 0, 0, 1)",
    deepAsh: "rgba(82,74,74,1)",


}
export const gs = StyleSheet.create({
    button: {
        backgroundColor: colors.hotPinkD,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginVertical: 5,
    },
    line: {
        borderBottomWidth: 1,
        width: "80%",
        borderBottomColor: colors.ash,
        paddingBottom: 5,
    },
    smallText: {
        fontWeight: "bold",
        color: colors.ash,
        fontSize: 15,
    }
})