import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, IconButton, useTheme } from "react-native-paper";

const ProfileHeader = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.headerSection}>
      <Avatar.Image
        size={80}
        source={{ uri: "https://example.com/avatar.png" }}
      />
      <View style={styles.userInfo}>
        <Text style={[styles.userName, { color: colors.onBackground }]}>
          Benjamin Cheung
        </Text>
        <Text style={[styles.userBio, { color: colors.onSurfaceVariant }]}>
          "I love meeting new people while traveling!"
        </Text>
      </View>
      <IconButton
        icon="pencil"
        size={20}
        iconColor={colors.primary}
        onPress={() => navigation.navigate("EditProfile")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userBio: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default ProfileHeader;
