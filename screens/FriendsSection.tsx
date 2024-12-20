import React from "react";
import { View, StyleSheet } from "react-native";
import { List, Button, useTheme } from "react-native-paper";

const FriendsSection = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View>
      <List.Section>
        <List.Subheader>Nearby Friends</List.Subheader>

        <List.Item
          title="Alice"
          description="Available to Meet"
          left={() => <List.Icon icon="account" />}
        />
        <List.Item
          title="Charlie"
          description="Exploring the city"
          left={() => <List.Icon icon="account" />}
        />
      </List.Section>

      <Button
        mode="contained"
        onPress={() => alert("Invite Friends!")}
        style={styles.inviteButton}
      >
        Invite Friends
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inviteButton: {
    marginTop: 10,
  },
});

export default FriendsSection;
