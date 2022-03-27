import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';
import MainStack from './MainStack';
import { observer } from 'mobx-react';
import { AppContext } from '../context/App';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  const {stores: {authStore}} = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AuthStack">
        {
          authStore.isAuthorized ? (<Stack.Screen name="MainStack" component={MainStack} />)
          : (<Stack.Screen name="AuthStack" component={AuthStack} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default observer(Navigation);