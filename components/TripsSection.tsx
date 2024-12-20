import React from "react";
import { View, StyleSheet } from "react-native";
import { List, Button, useTheme } from "react-native-paper";

const TripsSection = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View>
      <List.Section>
        <List.Subheader>Upcoming Trips</List.Subheader>

        <List.Item
          title="Toronto"
          description="Dec 20-25, 2024"
          left={() => <List.Icon icon="airplane" />}
        />
        <List.Item
          title="New York"
          description="Jan 2-10, 2025"
          left={() => <List.Icon icon="airplane" />}
        />
      </List.Section>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("AddTripScreen")}
        style={styles.addTripButton}
      >
        Add a New Trip
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  addTripButton: {
    marginTop: 10,
  },
});

export default TripsSection;
