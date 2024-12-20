import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Avatar, Button, IconButton, useTheme } from "react-native-paper";

const FriendProfileScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const { user } = route.params; // Get user details from navigation params
  const [isFriend, setIsFriend] = useState(false); // Track if this user is a friend

  const handleAddRemoveFriend = () => {
    setIsFriend((prev) => !prev);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* Back Button */}
      <IconButton
        icon="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        iconColor={colors.primary}
      />

      {/* Profile Header Section */}
      <View style={styles.headerSection}>
        <Avatar.Image
          size={90}
          source={{ uri: user.avatar }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={[styles.userName, { color: colors.onSurface }]}>
            {user.name}
          </Text>
          <Text style={[styles.userBio, { color: colors.onSurface }]}>
            {user.bio || "No bio provided."}
          </Text>
        </View>
      </View>

      {/* Mutual Friends Count */}
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: colors.secondary,
        }}
      >
        <Text style={[styles.mutualFriendsText, { color: colors.surface }]}>
          Mutual Friends: {user.mutualFriends || 0}
        </Text>
      </View>

      {/* Add/Remove Friend Button */}
      <Button
        mode={isFriend ? "outlined" : "contained"}
        style={styles.friendButton}
        onPress={handleAddRemoveFriend}
        buttonColor={isFriend ? colors.surface : colors.primary}
        textColor={isFriend ? colors.primary : colors.onPrimary}
      >
        {isFriend ? "Remove Friend" : "Add Friend"}
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  avatar: {
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userBio: {
    fontSize: 14,
    fontStyle: "italic",
  },
  mutualFriendsSection: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  mutualFriendsText: {
    fontSize: 16,
  },
  friendButton: {
    marginTop: 20,
  },
});

export default FriendProfileScreen;
