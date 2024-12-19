import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";

const CityListItem = ({ item }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[styles.listItem, { borderBottomColor: colors.outlineVariant }]}
    >
      <Text style={[styles.itemTitle, { color: colors.onSurface }]}>
        {item.city}
      </Text>
      <Text style={[styles.itemSubtitle, { color: colors.onSurfaceVariant }]}>
        {item.status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 16,
  },
});

export default CityListItem;
