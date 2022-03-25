import React from 'react';
import Login from '../screens/Login'
import Register from '../screens/Register'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const AuthStackNavigator = createStackNavigator();

export default function AuthNavigator() {
    return <NavigationContainer>
        <AuthStackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStackNavigator.Screen
                name="Login"
                component={Login}
                />
            <AuthStackNavigator.Screen
                name="Register"
                component={Register}
                />
        </AuthStackNavigator.Navigator>
    </NavigationContainer>
}