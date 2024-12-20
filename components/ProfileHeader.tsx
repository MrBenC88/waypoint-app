import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Button, useTheme, IconButton } from "react-native-paper";
import { AvailabilityStatus, AvailabilityStatusEmojis } from "../data/enums";

const ProfileHeader = ({ navigation }) => {
  const { colors } = useTheme();

  const user = {
    name: "Ben Cheung",
    username: "mrbenc88",
    avatar: "https://example.com/avatar1.png",
    availability: AvailabilityStatus.ChillingNoPlans,
  };

  const availabilityEmote = AvailabilityStatusEmojis[user.availability] ?? "";

  return (
    <View style={[styles.headerContainer, { backgroundColor: colors.surface }]}>
      {/* Profile Info Section */}
      <View style={styles.profileTopContainer}>
        <Avatar.Image source={{ uri: user.avatar }} size={64} />
        <View style={styles.userInfo}>
          <Text style={[styles.userName, { color: colors.onSurface }]}>
            {user.name}
          </Text>
          <Text
            style={[styles.userUsername, { color: colors.onSurfaceVariant }]}
          >
            @{user.username}
          </Text>
          <Text
            style={[
              styles.userAvailability,
              { color: colors.onSurfaceVariant },
            ]}
          >
            {availabilityEmote} {user.availability}
          </Text>
        </View>
        <IconButton
          icon="dots-horizontal"
          size={24}
          onPress={() => console.log("More options")}
          style={styles.moreOptionsButton}
          accessibilityLabel="More options"
        />
      </View>

      {/* Update Status Button */}
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("EditProfileScreen")}
        style={styles.updateStatusButton}
        accessibilityLabel="Update your status"
      >
        Update Status
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 10,
  },
  profileTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userUsername: {
    fontSize: 14,
    marginTop: 2,
  },
  userAvailability: {
    fontSize: 14,
    marginTop: 2,
  },
  moreOptionsButton: {
    alignSelf: "flex-start",
  },
  updateStatusButton: {
    marginTop: 12,
    //marginBottom: 2,
    borderRadius: 20,
    justifyContent: "center",
  },
});

export default ProfileHeader;
