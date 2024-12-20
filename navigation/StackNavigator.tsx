import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import { IconButton, useTheme } from "react-native-paper";
import FriendProfileScreen from "../screens/FriendProfileScreen";
import DirectMessageScreen from "../screens/DirectMessageScreen";
import WhoInYourCityScreen from "../screens/WhoInYourCityScreen";
import SetWaypointScreen from "../screens/SetWaypointScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { colors } = useTheme();

  return (
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
        // options={({ navigation }) => ({
        //   headerShown: true,
        //   headerLeft: () => (
        //     <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        //   ),
        //   title: "Login", // Set the title of the screen
        // })}
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
      <Stack.Screen
        name="FriendProfileScreen"
        component={FriendProfileScreen}
      />
      <Stack.Screen
        name="DirectMessageScreen"
        component={DirectMessageScreen}
      />
      <Stack.Screen
        name="WhoInYourCityScreen"
        component={WhoInYourCityScreen}
        options={{ title: "Who's in Your City" }}
      />
      <Stack.Screen
        name="SetWaypointScreen"
        component={SetWaypointScreen}
        options={{ title: "Set your current Waypoint" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
