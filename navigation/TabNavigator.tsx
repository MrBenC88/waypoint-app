import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FeedScreen from "../screens/FeedScreen";
import Icon from "react-native-vector-icons/Feather"; // Feather Icons

const Tab = createBottomTabNavigator();

// Custom Tab Bar Button
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customTabButton}
    activeOpacity={0.8}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, // Hide the label names for Home, Feed, Profile
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Feed") iconName = "rss";
          else if (route.name === "Profile") iconName = "user";
          return <Icon name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.onSurface,
        tabBarStyle: {
          backgroundColor: colors.surface,
          height: 50,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customTabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabNavigator;
