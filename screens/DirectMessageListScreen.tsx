import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Avatar, Text, useTheme, Appbar, Badge } from "react-native-paper";

const MOCK_DIRECT_MESSAGES = [
  {
    id: "1",
    name: "Alice",
    username: "alice_wanderlust",
    avatar: "https://example.com/avatar1.png",
    lastMessage: "Hey! How was your trip to Tokyo?",
    lastMessageTime: "2m",
    unreadCount: 3,
  },
  {
    id: "2",
    name: "Bob",
    username: "bobthetraveler",
    avatar: "https://example.com/avatar2.png",
    lastMessage: "See you at the conference tomorrow!",
    lastMessageTime: "10m",
    unreadCount: 0,
  },
  {
    id: "3",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    lastMessage: "Sounds good! Let me know when you’re free.",
    lastMessageTime: "1h",
    unreadCount: 2,
  },
  {
    id: "4",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    lastMessage: "Just landed in NYC! 🗽",
    lastMessageTime: "3h",
    unreadCount: 0,
  },
  {
    id: "5",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    lastMessage: "Can I crash at your place next week?",
    lastMessageTime: "1d",
    unreadCount: 1,
  },
];

const DirectMessageListScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const renderMessageItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.messageItemContainer,
          { backgroundColor: colors.surface },
        ]}
        onPress={() =>
          navigation.navigate("DirectMessageScreen", { user: item })
        }
      >
        {/* User Avatar */}
        <View>
          <Avatar.Image source={{ uri: item.avatar }} size={50} />
          {item.unreadCount > 0 && (
            <Badge style={styles.unreadBadge}>{item.unreadCount}</Badge>
          )}
        </View>

        {/* Message Info */}
        <View style={styles.messageContent}>
          <View style={styles.nameAndTime}>
            <Text style={[styles.name, { color: colors.onSurface }]}>
              {item.name}
            </Text>
            <Text style={[styles.time, { color: colors.onSurfaceVariant }]}>
              {item.lastMessageTime}
            </Text>
          </View>

          <Text
            style={[styles.messagePreview, { color: colors.onSurfaceVariant }]}
          >
            {item.lastMessage}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: colors.background, height: "100%" }}>
      {/* App Bar */}
      <Appbar.Header>
        <Appbar.Content title="Messages" color={colors.onSurface} />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Search messages")}
        />
      </Appbar.Header>

      {/* FlatList of Messages */}
      <FlatList
        data={MOCK_DIRECT_MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  messageItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  messageContent: {
    marginLeft: 12,
    flex: 1,
  },
  nameAndTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  messagePreview: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  unreadBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#f44336",
    color: "#fff",
    fontSize: 12,
  },
});

export default DirectMessageListScreen;
