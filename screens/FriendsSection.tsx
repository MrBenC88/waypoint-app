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

const FriendsSection = ({ navigation }) => {
  const { colors } = useTheme();

  return (
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
  viewFriendsButton: {
    marginTop: 10,
  },
});

export default FriendsSection;
