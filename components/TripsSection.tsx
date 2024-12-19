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
import ProfileHeader from "../components/ProfileHeader";
import CurrentWaypoint from "../components/CurrentWaypoint";

const TripsSection = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.onBackground }]}>
        🗓️ My Trips (2)
      </Text>

      <TouchableOpacity
        style={styles.tripItem}
        onPress={() => navigation.navigate("TripView")}
      >
        <Text style={{ color: colors.onBackground }}>📍 New York City, NY</Text>
        <Text style={{ color: colors.onSurfaceVariant }}>Dec 20 - Dec 25</Text>
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
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tripItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  addTripButton: {
    marginTop: 10,
  },
});

export default TripsSection;
