import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {
  Text,
  Avatar,
  Button,
  IconButton,
  Divider,
  Chip,
  useTheme,
  Card,
} from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Avatar.Image
          size={80}
          source={{ uri: "https://example.com/avatar.png" }}
        />
        <View style={styles.userInfo}>
          <Text style={[styles.userName, { color: colors.onBackground }]}>
            Benjamin Cheung
          </Text>
          <Text style={[styles.userBio, { color: colors.onSurfaceVariant }]}>
            "I love meeting new people while traveling!"
          </Text>
        </View>
        <IconButton
          icon="pencil"
          size={20}
          iconColor={colors.primary}
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>

      <Divider style={{ marginVertical: 10 }} />

      {/* Waypoint Section */}
      <View style={styles.waypointSection}>
        <Text style={[styles.sectionTitle, { color: colors.onBackground }]}>
          My Waypoint:
        </Text>
        <Chip
          style={[styles.waypointChip, { backgroundColor: colors.primary }]}
          textStyle={[styles.waypointChipText, { color: colors.onPrimary }]}
          onPress={() => console.log("Change Waypoint")}
        >
          Vancouver, BC, Canada
        </Chip>
      </View>

      <Divider style={{ marginVertical: 10 }} />

      {/* Trips Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.onBackground }]}>
          🗓️ My Trips (2)
        </Text>

        <TouchableOpacity
          style={styles.tripItem}
          onPress={() => navigation.navigate("TripView")}
        >
          <Text style={{ color: colors.onBackground }}>
            📍 New York City, NY
          </Text>
          <Text style={{ color: colors.onSurfaceVariant }}>
            Dec 20 - Dec 25
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tripItem}
          onPress={() => navigation.navigate("TripView")}
        >
          <Text style={{ color: colors.onBackground }}>📍 Tokyo, Japan</Text>
          <Text style={{ color: colors.onSurfaceVariant }}>Upcoming</Text>
        </TouchableOpacity>

        <Button
          icon="plus"
          mode="outlined"
          style={styles.addTripButton}
          onPress={() => navigation.navigate("AddTrip")}
        >
          Add New Trip
        </Button>
      </View>

      <Divider style={{ marginVertical: 10 }} />

      {/* Friends Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.onBackground }]}>
          👥 Friends (5)
        </Text>
        <Button
          mode="outlined"
          style={styles.viewFriendsButton}
          onPress={() => navigation.navigate("FriendsPage")}
        >
          View Friends
        </Button>
      </View>

      <Divider style={{ marginVertical: 10 }} />

      {/* Settings Section */}
      <View style={styles.section}>
        <Button
          mode="outlined"
          style={styles.settingsButton}
          onPress={() => navigation.navigate("AccountSettings")}
        >
          ⚙️ Account Settings
        </Button>
        <Button
          mode="text"
          onPress={() => console.log("Logout")}
          buttonColor={colors.secondaryContainer}
        >
          🚪 Logout
        </Button>
      </View>
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
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userBio: {
    fontSize: 14,
    marginTop: 4,
  },
  waypointSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  waypointChip: {
    borderRadius: 20,
    height: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  waypointChipText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tripItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  addTripButton: {
    marginTop: 10,
  },
  viewFriendsButton: {
    marginTop: 10,
  },
  settingsButton: {
    marginBottom: 10,
  },
});

export default ProfileScreen;
