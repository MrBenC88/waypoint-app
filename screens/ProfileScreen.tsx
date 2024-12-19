import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Divider, useTheme } from "react-native-paper";
import ProfileHeader from "../components/ProfileHeader";
import CurrentWaypoint from "../components/CurrentWaypoint";
import TripsSection from "../components/TripsSection";
import FriendsSection from "./FriendsSection";
import SettingsSection from "./SettingsSection";

const ProfileScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContainer}
    >
      <ProfileHeader navigation={navigation} />
      <Divider style={{ marginVertical: 10 }} />
      <CurrentWaypoint />
      <Divider style={{ marginVertical: 10 }} />
      <TripsSection navigation={navigation} />
      <Divider style={{ marginVertical: 10 }} />
      <FriendsSection navigation={navigation} />
      <Divider style={{ marginVertical: 10 }} />
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
});

export default ProfileScreen;
