import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="MainApp" // should be LoginScreen, change this for skipping
    screenOptions={{
      headerShown: false, // Hide headers for stack screens
    }}
  >
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="MainApp" component={TabNavigator} />
  </Stack.Navigator>
);

export default StackNavigator;
