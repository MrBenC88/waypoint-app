import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton, useTheme } from "react-native-paper";

const SearchInputBar = ({ searchQuery, setSearchQuery }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search for friends, trips, or cities"
        mode="outlined"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        theme={{ colors: { placeholder: colors.onSurfaceVariant } }}
      />
      <IconButton
        icon="filter-variant"
        size={24}
        onPress={() => console.log("Filter button pressed")}
        style={styles.filterIcon}
        iconColor={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  searchInput: {
    flex: 1,
    borderRadius: 20,
    height: 40,
  },
  filterIcon: {
    marginLeft: 10,
  },
});

export default SearchInputBar;
