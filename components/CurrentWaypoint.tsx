import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Chip, useTheme } from "react-native-paper";

const CurrentWaypoint = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.waypointSection}>
      <Text style={[styles.currentWaypointTitle, { color: colors.onSurface }]}>
        My Waypoint:
      </Text>
      <Chip
        style={[styles.waypointChip, { backgroundColor: colors.primary }]}
        textStyle={[styles.waypointChipText, { color: colors.onPrimary }]}
        onPress={() => console.log("Change waypoint")}
      >
        Vancouver, BC, Canada
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  waypointSection: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  currentWaypointTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flexShrink: 1,
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
});

export default CurrentWaypoint;
