import 'react-native-gesture-handler';
//Always keep this in top

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import SignUpScreen from "./screens/SignUp";
import  firebase  from 'firebase/app';
import "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {

    apiKey: "AIzaSyBoHQboxQXft8X9yLuSliDxQTV4KKMMh84",
  
    authDomain: "mapcdu-e8128.firebaseapp.com",
  
    projectId: "mapcdu-e8128",
  
    storageBucket: "mapcdu-e8128.appspot.com",
  
    messagingSenderId: "888167808591",
  
    appId: "1:888167808591:web:efdfe698bfb725e432743a"
  
  };
  

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });



  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;