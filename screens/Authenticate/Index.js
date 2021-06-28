import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { colors } from "../../style"
import Login from "./Component/Login"
import Register from "./Component/Register"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function Index() {
    const Stack = createStackNavigator()
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle="dark-content" /> */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="login" component={Login} options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="register" component={Register}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <Login /> */}
            {/* <Register /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.transperent,
    }
})
