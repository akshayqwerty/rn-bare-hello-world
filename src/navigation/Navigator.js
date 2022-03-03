import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Explore from '../screens/Explore'
import Search from '../screens/Search'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'


export default function Navigator() {
    const Tab = createBottomTabNavigator()
    
  return (
    <NavigationContainer>
       <Tab.Navigator initialRouteName='Home' screenOptions={{
           headerShown : false
       }}>
           <Tab.Screen name='Home' component={Home} />
           <Tab.Screen name='Search' component={Search} />
           <Tab.Screen name='Explore' component={Explore} />
           <Tab.Screen name='Cart' component={Cart} />
           <Tab.Screen name='Profile' component={Profile} />
       </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})