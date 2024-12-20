import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, useTheme, Avatar } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import {
  HostStatus,
  LeftoverStatus,
  HostStatusEmojis,
  LeftoverStatusEmojis,
} from "../data/enums";

// **Who’s in Your City Story Avatar** Component
const FriendStory = ({ friend }) => {
  const { colors } = useTheme();

  // Shared values for border colors
  const borderColor = useSharedValue("#e0e0e0"); // Default gray

  // Update colors dynamically based on friend's status
  useEffect(() => {
    const isOpenToHost = friend.hostStatus === HostStatus.OpenToHost;
    const hasLeftovers = friend.leftoverStatus === LeftoverStatus.Available;

    if (isOpenToHost && hasLeftovers) {
      borderColor.value = withTiming("#2962ff", { duration: 500 }); // Mixed blue color
    } else if (isOpenToHost) {
      borderColor.value = withTiming("#00c853", { duration: 500 }); // Forest Green
    } else if (hasLeftovers) {
      borderColor.value = withTiming("#2962ff", { duration: 500 }); // Blue
    } else {
      borderColor.value = withTiming("#e0e0e0", { duration: 500 }); // Default gray
    }
  }, [friend.hostStatus, friend.leftoverStatus]);

  // Create an animated style for the border
  const animatedBorderStyle = useAnimatedStyle(() => {
    return {
      borderColor: borderColor.value,
    };
  });

  // Status emoji logic
  const statusEmoji = getStatusEmoji(friend);

  return (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => console.log(`Clicked on ${friend.name}`)}
    >
      <Animated.View style={[styles.avatarContainer, animatedBorderStyle]}>
        <Avatar.Image source={{ uri: friend.avatar }} size={60} />
        {statusEmoji && (
          <View style={styles.statusEmojiContainer}>
            <Text style={styles.statusEmoji}>{statusEmoji}</Text>
          </View>
        )}
      </Animated.View>
      <Text style={[styles.storyName, { color: colors.onSurface }]}>
        {friend.name}
      </Text>
    </TouchableOpacity>
  );
};

// 🎉 **Helper Function 1: Get Status Emoji**
const getStatusEmoji = (friend) => {
  const hostEmoji = HostStatusEmojis[friend.hostStatus] || "";
  const leftoverEmoji = LeftoverStatusEmojis[friend.leftoverStatus] || "";

  // Combine host and leftover emoji if both exist
  if (hostEmoji && leftoverEmoji) {
    return `${leftoverEmoji} ${hostEmoji}`; // Combine emojis
  } else if (hostEmoji) {
    return hostEmoji; // Only host emoji
  } else if (leftoverEmoji) {
    return leftoverEmoji; // Only leftover emoji
  }

  return null; // No emoji if no status
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  avatarContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    borderRadius: 30,
  },
  statusEmojiContainer: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  statusEmoji: {
    fontSize: 16,
    lineHeight: 16,
  },
  storyName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default FriendStory;
