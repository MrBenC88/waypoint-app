import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, TextInput, IconButton, Chip, Avatar } from "react-native-paper";
import { useTheme } from "react-native-paper";

// Mock data
const MOCK_FRIENDS = [
  {
    id: "1",
    name: "Alice",
    status: "Available",
    avatar: "https://example.com/avatar1.png",
  },
  {
    id: "2",
    name: "Bob",
    status: "Traveling",
    avatar: "https://example.com/avatar2.png",
  },
  {
    id: "3",
    name: "Charlie",
    status: "At a conference",
    avatar: "https://example.com/avatar3.png",
  },
];

const MOCK_TRIPS = [
  { id: "1", city: "Toronto", date: "Dec 20-25, 2024" },
  { id: "2", city: "New York", date: "Jan 2-10, 2025" },
  { id: "3", city: "Tokyo", date: "Feb 10-18, 2025" },
];

const MOCK_CITIES = [
  { id: "1", city: "Vancouver", status: "5 friends here" },
  { id: "2", city: "Los Angeles", status: "2 friends here" },
  { id: "3", city: "Singapore", status: "1 friend here" },
];

const ExploreScreen = () => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Friends"); // Options: 'Friends', 'Trips', 'Cities'

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
      return (
        <TouchableOpacity style={styles.listItem}>
          <Avatar.Image
            source={{ uri: item.avatar }}
            size={40}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemSubtitle}>{item.status}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    if (activeTab === "Trips") {
      return (
        <View style={styles.listItem}>
          <Text style={styles.itemTitle}>{item.city}</Text>
          <Text style={styles.itemSubtitle}>{item.date}</Text>
        </View>
      );
    }
    if (activeTab === "Cities") {
      return (
        <View style={styles.listItem}>
          <Text style={styles.itemTitle}>{item.city}</Text>
          <Text style={styles.itemSubtitle}>{item.status}</Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Search Input */}
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

      {/* Filter Tabs */}
      <View style={styles.tabContainer}>
        {["Friends", "Trips", "Cities"].map((tab) => (
          <Chip
            key={tab}
            mode={activeTab === tab ? "flat" : "outlined"}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.chip,
              activeTab === tab && { backgroundColor: colors.primaryContainer },
            ]}
            textStyle={
              activeTab === tab
                ? { color: colors.onPrimary }
                : { color: colors.onSurface }
            }
          >
            {tab}
          </Chip>
        ))}
      </View>

      {/* List View */}
      <FlatList
        data={getFilteredData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  chip: {
    paddingHorizontal: 12,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
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
    color: "#666",
  },
});

export default ExploreScreen;
