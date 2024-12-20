import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Divider, useTheme } from "react-native-paper";
import ProfileHeader from "../components/ProfileHeader";
import CurrentWaypoint from "../components/CurrentWaypoint";
import TripsSection from "../components/TripsSection";
import FriendsSection from "../screens/FriendsSection";
import SettingsSection from "../screens/SettingsSection";

const ProfileScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* 👤 **User Profile Header** */}
      <ProfileHeader navigation={navigation} />

      <Divider style={styles.divider} />

      {/* 📍 **Current Waypoint** (Current Status & City) */}
      <CurrentWaypoint />

      <Divider style={styles.divider} />

      {/* ✈️ **Trips Section** (User's Upcoming Trips) */}
      <TripsSection navigation={navigation} />

      <Divider style={styles.divider} />

      {/* 🤝 **Friends Section** (Friends Nearby & Call-to-Actions) */}
      <FriendsSection navigation={navigation} />

      <Divider style={styles.divider} />

      {/* ⚙️ **Settings Section** (User Account, Privacy, Help, etc.) */}
      <SettingsSection navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  scrollContainer: {
    padding: 20,
  },
  divider: {
    marginVertical: 10,
  },
});

export default ProfileScreen;
