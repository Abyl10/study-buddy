import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import CreateAppointment from '../../screens/CreateAppointment';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateAppointment" component={CreateAppointment} />
    </Stack.Navigator>
  );
};

export default HomeStack;
