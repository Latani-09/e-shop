import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View,Image ,Text, Button} from 'react-native';
import Dashboard from './Dashboard';
import Login from './Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={appStyles.container}>
    <View style={appStyles.header}>
    <Image source={require('./assets/emarket.png')} style={appStyles.logo}/>
   
  </View>
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
{/*
export default function App () {
  return (

    <View>
    <View style={appStyles.header}>
        <Image source={require('./assets/emarket.png')} style={appStyles.logo}/>
       
      </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};
*/}
const appStyles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    justifyContent:'center',
    width:'100%',
    margin:5,
  },
  header:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'right',
    fontSize:'16px',
  },
  logo:
  {    width: 150,
    height: 50,
    marginTop: 5, 
  marginBottom:5 },
  loginContainer:{
    marginBottom:'10px',
  },

})
