import React from "react";

//Navigation Requirements
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcon  from "react-native-vector-icons/Ionicons";
import {Text, Dimensions} from 'react-native'

//Imported Screens
import TabOne from "../screens/TabOne";
import TabTwo from "../screens/TabTwo";
import TabThree from "../screens/TabThree";


const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

function TabOneStackScreen (){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Map" component={TabOne}/>
        </Stack.Navigator>
    )

}

function TabTwoStackScreen (){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Menu" component={TabTwo}/>
        </Stack.Navigator>
    )

}

function TabThreeStackScreen (){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SignOut" component={TabThree}/>
        </Stack.Navigator>
    )

}

const Tab = createBottomTabNavigator();
export default function HomeScreen(props) 
{
    return(
        <NavigationContainer independent="true">
            <Tab.Navigator
            screenOptions={({route}) => ({
            headerTitle: () => <Text>CDU MAP</Text>,
            tabBarIcon: ({focused, color, size, padding}) => {
                let iconName;
                if(route.name === 'Map') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Menu') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                } else if (route.name === 'SignOut') {
                    iconName = focused ? 'person' : 'person-outline';   
            }
            return(
                <IonicIcon name={iconName} 
                size={size} 
                color={color} 
                style={{paddingBottom: padding}}/>
            );
            },
        })}
        tabBarOptions={{
            activeTintColor: '#00e0ff',
            inactiveTintColor: '#cbe1ec',
            labelStyle: {fontSize: 16},
            style: {width:fullScreenWidth},
        }}>
                <Tab.Screen name="Map" component ={TabOneStackScreen} />
                <Tab.Screen name="Menu" component ={TabTwoStackScreen} />
                <Tab.Screen name="SignOut" component ={TabThreeStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}