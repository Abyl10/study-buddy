import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Messages from '../../screens/Messages';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default MainStack;
