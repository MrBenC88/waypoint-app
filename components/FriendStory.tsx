import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
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
  const borderColor = useSharedValue(0); // Value from 0 to 2 for color interpolation
  const emojiScale = useSharedValue(1); // Animation for emoji scale

  // Update colors dynamically based on friend's status
  useEffect(() => {
    const isOpenToHost = friend.hostStatus === HostStatus.OpenToHost;
    const hasLeftovers = friend.leftoverStatus === LeftoverStatus.Available;

    if (isOpenToHost && hasLeftovers) {
      borderColor.value = withTiming(2, { duration: 500 });
    } else if (isOpenToHost) {
      borderColor.value = withTiming(1, { duration: 500 });
    } else if (hasLeftovers) {
      borderColor.value = withTiming(0.5, { duration: 500 });
    } else {
      borderColor.value = withTiming(0, { duration: 500 });
    }

    // Animate the emoji to bounce when status changes
    emojiScale.value = withTiming(1.5, { duration: 200 }, () => {
      emojiScale.value = withTiming(1, { duration: 200 });
    });
  }, [friend.hostStatus, friend.leftoverStatus]);

  // Interpolate the border color dynamically
  const animatedBorderStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      borderColor.value,
      [0, 0.5, 1, 2],
      [
        "#F2F2F2", // Default: Adventure White
        "#58C9F3", // Leftovers: Sky Blue
        "#FF8C42", // Host: Sunset Orange
        "#FFD700", // Dual: Adventure Gold
      ]
    );
    return {
      borderColor: color,
    };
  });

  // Animate the emoji scale
  const animatedEmojiStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: emojiScale.value }],
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
          <Animated.View
            style={[styles.statusEmojiContainer, animatedEmojiStyle]}
          >
            <Text style={styles.statusEmoji}>{statusEmoji}</Text>
          </Animated.View>
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
  const hostEmoji =
    HostStatusEmojis[friend.hostStatus] ===
    HostStatusEmojis[HostStatus.OpenToHost]
      ? HostStatusEmojis[HostStatus.OpenToHost]
      : "";
  const leftoverEmoji =
    LeftoverStatusEmojis[friend.leftoverStatus] ===
    LeftoverStatusEmojis[LeftoverStatus.Available]
      ? LeftoverStatusEmojis[LeftoverStatus.Available]
      : "";

  // Combine host and leftover emoji if both exist
  if (hostEmoji && leftoverEmoji) {
    return `${hostEmoji}${leftoverEmoji}`; // Combine emojis
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
