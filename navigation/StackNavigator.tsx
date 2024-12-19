import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FriendProfileScreen from "../screens/FriendProfileScreen";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen" // Start on the Login screen
    screenOptions={{
      headerShown: false, // Hide header by default
    }}
  >
    {/* Login Screen */}
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        ),
        title: "Login", // Set the title of the screen
      })}
    />

    {/* Register Screen */}
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        ),
        title: "Register", // Set the title of the screen
      })}
    />

    {/* Main App (Tab Navigation) */}
    <Stack.Screen
      name="MainApp"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="FriendProfileScreen" component={FriendProfileScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
