import React from "react";
import { View, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace("LoginScreen"); // Send user back to LoginScreen
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={{ padding: 20, justifyContent: "center", flex: 1 }}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;
