import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BaseHeader from "../components/BaseHeader"
import Menu from "../screens/Menu" 
import Cities from "../screens/Cities"
import Genres from "../screens/Genres"
import EfirList from "../screens/EfirList"
import AlarmClock from "../screens/AlarmClock"
const Stack = createStackNavigator();
const HomeNavigator: React.FunctionComponent = () => (
  <Stack.Navigator initialRouteName="Menu">
  
    <Stack.Screen
      name="Menu"
      component={Menu}
       options={{ header: BaseHeader, headerTransparent: true, }}
    />
    <Stack.Screen
    name="Cities"
    component={Cities}
     options={{ header: BaseHeader, headerTransparent: true, }}
    /> 
    <Stack.Screen
    name="Genres"
    component={Genres}
     options={{ header: BaseHeader, headerTransparent: true, }}
    />
    <Stack.Screen
    name="AlarmClock"
    component={AlarmClock}
    options={{headerShown:false}}
    />
     <Stack.Screen
    name="EfirList"
    component={EfirList}
    options={{headerShown:false}}
    />
  </Stack.Navigator>
);
export default HomeNavigator;
