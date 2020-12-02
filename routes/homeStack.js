
import React from 'react';
import { Image,Platform,Dimensions  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/homeScreen'
import GenerateUser from '../src/generateUser'


//var deviceHeight = Dimensions.get('window').height;
//var deviceWidth = Dimensions.get('window').width;

 const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator();


export default Navigator = () => {
  return (

    <Stack.Navigator initialRouteName="HomeScreen"
      screenOptions={{ gestureEnabled: false }}>
    {/* Home */}
    <Stack.Screen name='HomeScreen'  component={HomeScreen} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 30,backgroundColor: '#171822', shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#fff'  }} />
    <Stack.Screen name='GenerateUser' component={GenerateUser} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 30,backgroundColor: '#171822', shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#fff'  }} />
         
    </Stack.Navigator>
  )
}