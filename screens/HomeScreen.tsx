import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Avatar,
  Card,
  IconButton,
  TextInput,
  Chip,
} from "react-native-paper";
import { MOCK_FRIENDS, MOCK_STATUSES } from "../data/mockData";

// **Who’s in Your City Story Avatar** Component
const FriendStory = ({ friend }) => (
  <TouchableOpacity
    style={styles.storyContainer}
    onPress={() => console.log(`Clicked on ${friend.name}`)}
  >
    <Avatar.Image
      source={{ uri: friend.avatar }}
      size={60}
      style={styles.avatar}
    />
    <Text style={styles.storyName}>{friend.name}</Text>
  </TouchableOpacity>
);

// **Status Update Card** Component for the Feed
const StatusCard = ({ status }) => (
  <Card style={styles.statusCard}>
    <Card.Title
      titleStyle={styles.cardTitle}
      subtitleStyle={styles.cardSubtitle}
      title={status.name}
      subtitle={status.date}
      left={() => <Avatar.Image source={{ uri: status.avatar }} size={32} />}
    />
    <Card.Content style={styles.cardContent}>
      <Text style={styles.cardStatusText}>{status.status}</Text>
    </Card.Content>
  </Card>
);

// **Main HomeScreen Component**
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Waypoint Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Where to next?"
          mode="outlined"
          style={styles.searchInput}
        />
        <IconButton
          icon="filter-variant"
          size={24}
          onPress={() => console.log("Open filters")}
          style={styles.filterIcon}
        />
      </View>

      {/* Current Waypoint Section */}
      <View style={styles.waypointSection}>
        <Text style={styles.currentWaypointTitle}>My Waypoint:</Text>
        <Chip
          style={styles.waypointChip}
          textStyle={styles.waypointChipText}
          onPress={() => console.log("Change waypoint")}
        >
          Vancouver, BC, Canada
        </Chip>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.title}>Who's in Your City?</Text>
          <IconButton
            icon="chevron-right"
            size={24}
            onPress={() => console.log("View Full List of Who’s in Your City")}
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

        <Text style={styles.title}>Status Feed</Text>

        {MOCK_STATUSES.map((status) => (
          <StatusCard key={status.id} status={status} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  waypointSection: {
    flexDirection: "row", // Makes the Text and Chip horizontal
    alignItems: "center", // Align Text and Chip vertically
    marginVertical: 8, // Add space around the section
    justifyContent: "space-between",
  },
  currentWaypointTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    flexShrink: 1, // Prevents the Text from taking too much space
  },
  waypointChip: {
    backgroundColor: "#4CBF50",
    borderRadius: 20,
    height: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  waypointChipText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 10,
    color: "#333",
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  storyContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  avatar: {
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  storyName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  statusCard: {
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  cardContent: {
    paddingVertical: 4,
  },
  cardStatusText: {
    fontSize: 12,
    color: "#333",
  },
  scrollContainer: {
    paddingHorizontal: 0,
  },
});

export default HomeScreen;
