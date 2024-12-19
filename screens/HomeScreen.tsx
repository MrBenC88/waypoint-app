import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {
  Text,
  Avatar,
  Card,
  IconButton,
  TextInput,
  Chip,
  FAB as FloatingActionButton,
  useTheme,
} from "react-native-paper";
import { MOCK_FRIENDS, MOCK_STATUSES } from "../data/mockData";

// **Who’s in Your City Story Avatar** Component
const FriendStory = ({ friend }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => console.log(`Clicked on ${friend.name}`)}
    >
      <Avatar.Image
        source={{ uri: friend.avatar }}
        size={60}
        style={[styles.avatar, { borderColor: colors.primary }]}
      />
      <Text style={[styles.storyName, { color: colors.onSurface }]}>
        {friend.name}
      </Text>
    </TouchableOpacity>
  );
};

// **Status Update Card** Component for the Feed
const StatusCard = ({ status }) => {
  const { colors } = useTheme();
  return (
    <Card style={[styles.statusCard, { backgroundColor: colors.surface }]}>
      <View style={styles.cardHeader}>
        <Avatar.Image
          source={{ uri: status.avatar }}
          size={28}
          style={styles.cardAvatar}
        />
        <View style={styles.cardHeaderTextContainer}>
          <Text style={[styles.cardTitle, { color: colors.onSurface }]}>
            {status.name}
          </Text>
          <Text
            style={[styles.cardSubtitle, { color: colors.onSurfaceVariant }]}
          >
            {status.date}
          </Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardStatusText, { color: colors.onSurface }]}>
          {status.status}
        </Text>
      </View>
    </Card>
  );
};

// **Main HomeScreen Component**
const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Search */}
      {/* <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search a friend, city, or event.."
          mode="outlined"
          style={styles.searchInput}
          theme={{ colors: { placeholder: colors.onSurfaceVariant } }}
        />
        <IconButton
          icon="filter-variant"
          size={24}
          onPress={() => console.log("Open filters")}
          style={styles.filterIcon}
          iconColor={colors.primary}
        />
      </View> */}

      <View style={styles.waypointSection}>
        <Text
          style={[styles.currentWaypointTitle, { color: colors.onSurface }]}
        >
          My Waypoint:
        </Text>
        <Chip
          style={[styles.waypointChip, { backgroundColor: colors.primary }]}
          textStyle={[styles.waypointChipText, { color: colors.onPrimary }]}
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
          <Text style={[styles.title, { color: colors.onBackground }]}>
            Who's in Your City?
          </Text>
          <IconButton
            icon="chevron-right"
            size={24}
            onPress={() => console.log("View Full List of Who’s in Your City")}
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

        <Text style={[styles.title, { color: colors.onBackground }]}>
          Status Feed
        </Text>

        {MOCK_STATUSES.map((status) => (
          <StatusCard key={status.id} status={status} />
        ))}
      </ScrollView>

      <FloatingActionButton
        icon="plus"
        color={colors.onPrimary}
        size="medium"
        onPress={() => console.log("Compose button pressed")}
        style={[
          styles.floatingActionButton,
          { backgroundColor: colors.primary },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  waypointSection: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  currentWaypointTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flexShrink: 1,
  },
  waypointChip: {
    borderRadius: 20,
    height: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  waypointChipText: {
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
  },
  storyName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  statusCard: {
    marginBottom: 6,
    borderRadius: 6,
    padding: 8,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cardAvatar: {
    marginRight: 10,
  },
  cardHeaderTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  cardTitle: {
    fontWeight: "bold",
    marginRight: 8, // Space between name and date
  },
  cardSubtitle: {
    color: "#666",
  },
  cardContent: {
    paddingVertical: 4, // Padding around the status message
  },
  cardStatusText: {
    color: "#333",
  },
  scrollContainer: {
    paddingHorizontal: 0,
  },
  floatingActionButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    elevation: 4,
  },
});

export default HomeScreen;
