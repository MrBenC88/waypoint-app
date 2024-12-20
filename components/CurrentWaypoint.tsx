import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Chip, useTheme } from "react-native-paper";

const CurrentWaypoint = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={styles.waypointSection}>
      <Text style={[styles.currentWaypointTitle, { color: colors.onSurface }]}>
        My Waypoint:
      </Text>
      <Chip
        style={[styles.waypointChip, { backgroundColor: colors.primary }]}
        textStyle={[styles.waypointChipText, { color: colors.onPrimary }]}
        onPress={() => navigation.navigate("SetWaypointScreen")}
      >
        Vancouver, BC, Canada
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  waypointSection: {
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
