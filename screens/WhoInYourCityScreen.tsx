import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, IconButton, useTheme } from "react-native-paper";
import { MOCK_FRIENDS } from "../data/mockData";
import FriendListItem from "../components/FriendListItem";

const WhoInYourCityScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headerContainer}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
          iconColor={colors.primary}
        />
        <Text style={[styles.headerTitle, { color: colors.onBackground }]}>
          Friends in Your City
        </Text>
      </View>
      <FlatList
        // filter data to only user's waypoint/current city
        data={MOCK_FRIENDS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendListItem item={item} navigation={navigation} />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 24, // Extra space for back button
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default WhoInYourCityScreen;
