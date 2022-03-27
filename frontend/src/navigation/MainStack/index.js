import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Messages from '../../screens/Messages';
import PerfectMatch from '../../screens/PerfectMatch';
import HomeTabs from '../HomeTabs';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="PerfectMatch" component={PerfectMatch} />
    </Stack.Navigator>
  );
};

export default MainStack;
