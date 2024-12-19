import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Avatar } from "react-native-paper";

const ProfileScreen = () => {
  const handleSignOut = () => {
    console.log("User signed out");
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{ uri: "https://example.com/avatar.png" }}
        size={100}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Adventurer & Traveler</Text>
      <Button mode="contained" onPress={handleSignOut} style={styles.button}>
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  name: { fontSize: 24, marginVertical: 10 },
  bio: { fontSize: 16, color: "#666", marginBottom: 20 },
  button: { marginTop: 20 },
});

export default ProfileScreen;
