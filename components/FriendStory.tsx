import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, useTheme, Avatar } from "react-native-paper";

// **Who’s in Your City Story Avatar** Component
const FriendStory = ({ friend }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => console.log(`Clicked on ${friend.name}`)}
    >
      <Avatar.Image
        source={{ uri: friend.avatar }}
        size={60}
        style={[styles.avatar, { borderColor: colors.primary }]}
      />
      <Text style={[styles.storyName, { color: colors.onSurface }]}>
        {friend.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  avatar: {
    borderWidth: 2,
  },
  storyName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default FriendStory;
