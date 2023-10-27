import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Appointment from '../Screens/Appointment';
import { AntDesign, FontAwesome  } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon:({size, color})=>(
            <AntDesign name="home" size={size} color={color} />
          )}}/>
      <Tab.Screen name="Appointment" component={Appointment} 
        options={{
          tabBarIcon:({size, color})=>(
            <AntDesign name="calendar" size={size} color={color} />
          )}}/>
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon:({size, color})=>(
            <FontAwesome name="user-circle-o" size={size} color={color} />
          )}}/>
    </Tab.Navigator>
  )
}