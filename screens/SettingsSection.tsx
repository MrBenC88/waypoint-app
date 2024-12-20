import React from "react";
import { View, StyleSheet } from "react-native";
import { List, useTheme } from "react-native-paper";

const SettingsSection = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View>
      <List.Section>
        <List.Item
          title="Account Settings"
          left={() => <List.Icon icon="cog-outline" />}
        />
        <List.Item title="Logout" left={() => <List.Icon icon="logout" />} />
      </List.Section>
    </View>
  );
};

export default SettingsSection;
