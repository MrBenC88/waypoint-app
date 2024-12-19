import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar, useTheme } from "react-native-paper";

const FriendListItem = ({ item, navigation }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.listItem, { borderBottomColor: colors.outlineVariant }]}
      onPress={() => navigation.navigate("FriendProfileScreen", { user: item })}
    >
      <Avatar.Image
        source={{ uri: item.avatar }}
        size={40}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.itemTitle, { color: colors.onSurface }]}>
          {item.name}
        </Text>
        <Text style={[styles.itemSubtitle, { color: colors.onSurfaceVariant }]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  avatar: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 16,
  },
});

export default FriendListItem;
