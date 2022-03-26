import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image } from 'react-native';
import Home from '../../screens/Home';
import MapScreen from '../../screens/MapScreen';
import MessagesList from '../../screens/MessagesList';
import colors from '../../assets/colors/colors';
import HomeStack from '../HomeStack'

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        // style: styles.tabBar,
        activeTintColor: colors.darkBlue,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}
      screenOptions={{headerShown: false}}
      >
      <Tabs.Screen name="HomeStack" component={HomeStack} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../../assets/icons/home.png')}
              style={{
                tintColor: focused ? colors.darkBlue : colors.gray,
              }}
            />
          </View>
        ),
      }} />
      <Tabs.Screen name="MapScreen" component={MapScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../../assets/icons/map.png')}
              style={{
                tintColor: focused ? colors.darkBlue : colors.gray,
              }}
            />
          </View>
        ),
      }} />
      <Tabs.Screen name="MessagesList" component={MessagesList} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../../assets/icons/chat.png')}
              style={{
                tintColor: focused ? colors.darkBlue : colors.gray,
              }}
            />
          </View>
        ),
      }} />
    </Tabs.Navigator>
  )
}

export default HomeTabs;
