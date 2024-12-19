import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";

const SettingsSection = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.section}>
      <Button
        mode="outlined"
        style={styles.settingsButton}
        onPress={() => navigation.navigate("AccountSettings")}
      >
        ⚙️ Account Settings
      </Button>
      <Button
        mode="text"
        onPress={() => console.log("Logout")}
        buttonColor={colors.secondaryContainer}
      >
        🚪 Logout
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
  settingsButton: {
    marginBottom: 10,
  },
});

export default SettingsSection;
