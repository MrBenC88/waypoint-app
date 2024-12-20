import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExploreScreen from "../screens/ExploreScreen";
import Icon from "react-native-vector-icons/Feather"; // Feather Icons
import DirectMessageListScreen from "../screens/DirectMessageListScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide headers for tab screens
        tabBarShowLabel: false, // Hide label names for Home, Explore, Profile
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Explore":
              iconName = "search";
              break;
            case "DM":
              iconName = "message-square";
              break;
            case "Profile":
              iconName = "user";
              break;
            case "Notifications":
              iconName = "bell";
              break;
            default:
              iconName = "circle";
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.onSurface,
        tabBarStyle: {
          backgroundColor: colors.surface,
          height: 43, // Ensures better touch targets for mobile devices
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 6, // Improved elevation for better shadow on Android
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="DM" component={DirectMessageListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
