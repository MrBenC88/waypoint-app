import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, IconButton, useTheme } from "react-native-paper";
import { MOCK_FRIENDS } from "../data/mockData";
import FriendStory from "../components/FriendStory";
import { useNavigation } from "@react-navigation/native";

const FriendStoryList = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.sectionHeaderContainer}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          Who's in Your City?
        </Text>
        <IconButton
          icon="chevron-right"
          size={24}
          onPress={() => navigation.navigate("WhoInYourCityScreen")}
          iconColor={colors.primary}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        {MOCK_FRIENDS.map((friend) => (
          <FriendStory key={friend.id} friend={friend} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalScroll: {
    paddingVertical: 10,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 10,
  },
});

export default FriendStoryList;
