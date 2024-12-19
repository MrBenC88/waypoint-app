import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { MOCK_FRIENDS, MOCK_TRIPS, MOCK_CITIES } from "../data/mockData";
import FriendListItem from "../components/FriendListItem";
import TripListItem from "../components/TripListItem";
import CityListItem from "../components/CityListItem";
import SearchInputBar from "../components/SearchInputBar";
import ExploreFilterTabs from "../components/ExploreFilterTabs";

const ExploreScreen = () => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Friends"); // Options: 'Friends', 'Trips', 'Cities'
  const navigation = useNavigation();

  // Filter logic for different tabs
  const getFilteredData = () => {
    if (activeTab === "Friends") {
      return MOCK_FRIENDS.filter((friend) =>
        friend.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeTab === "Trips") {
      return MOCK_TRIPS.filter((trip) =>
        trip.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeTab === "Cities") {
      return MOCK_CITIES.filter((city) =>
        city.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return [];
  };

  const renderItem = ({ item }) => {
    if (activeTab === "Friends") {
      return <FriendListItem item={item} navigation={navigation} />;
    }
    if (activeTab === "Trips") {
      return <TripListItem item={item} />;
    }
    if (activeTab === "Cities") {
      return <CityListItem item={item} />;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchInputBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ExploreFilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* List View */}
      <FlatList
        data={getFilteredData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", color: colors.onSurfaceVariant }}>
            No results found
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ExploreScreen;
