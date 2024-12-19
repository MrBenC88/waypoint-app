import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import FriendStoryList from "../components/FriendStoryList";
import StatusCardList from "../components/StatusCardList";
import FloatingComposeButton from "../components/FloatingComposeButton";
import CurrentWaypoint from "../components/CurrentWaypoint";

const MainContentFeed = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <FriendStoryList />
      <StatusCardList />
    </ScrollView>
  );
};

// **Main HomeScreen Component**
const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <CurrentWaypoint />
      <MainContentFeed />
      <FloatingComposeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  searchContainer: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    borderRadius: 20,
    height: 40,
  },
  filterIcon: {
    marginLeft: 10,
  },

  scrollContainer: {
    paddingHorizontal: 0,
  },
});

export default HomeScreen;
