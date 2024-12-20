import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar, useTheme } from "react-native-paper";
import { AvailabilityStatusEmojis, PurposeOfVisitEmojis } from "../data/enums";

const FriendListItem = ({ item, navigation }) => {
  const { colors } = useTheme();
  const availabilityEmoji = AvailabilityStatusEmojis[item.availability] || "";
  const purposeEmoji = PurposeOfVisitEmojis[item.purpose] || "";
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
          {item.name} ({item.city})
        </Text>
        <Text style={[styles.itemSubtitle, { color: colors.onSurfaceVariant }]}>
          {availabilityEmoji} {item.availability}
        </Text>
        <Text style={[styles.itemSubtitle, { color: colors.onSurfaceVariant }]}>
          {purposeEmoji} {item.purpose}
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
