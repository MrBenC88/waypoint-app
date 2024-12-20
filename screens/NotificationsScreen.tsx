import React, { useState, useCallback } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { Text, Avatar, useTheme, Appbar, Snackbar } from "react-native-paper";
import { AvailabilityStatusEmojis } from "../data/enums";
import { MOCK_NOTIFICATIONS } from "../data/mockData";

// 🚀 Title Generator Function
const generateNotificationTitle = ({
  type,
  name,
  city,
  status,
  hostStatus,
}) => {
  switch (type) {
    case "availability":
      return `${
        AvailabilityStatusEmojis[status] || "🔔"
      } ${name} is ${status}!`;

    case "location":
      return `📍 ${name} just arrived in ${city}!`;

    case "trip":
      return `✈️ ${name} added a trip to ${city}!`;

    case "host":
      return `🛋️ ${name} is ${hostStatus}!`;

    case "leaving":
      return `✈️ ${name} is leaving ${city} soon!`;

    default:
      return `🔔 ${name} updated their status!`;
  }
};

const NotificationScreen = () => {
  const { colors } = useTheme();
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  // Clear all notifications
  const handleClearNotifications = () => {
    Alert.alert(
      "Clear Notifications",
      "Are you sure you want to clear all notifications?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Clear", onPress: () => setNotifications([]) },
      ]
    );
  };

  // Handle swipe-to-dismiss for individual notifications
  const handleDismissNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    setSnackbarVisible(true);
  };

  // Infinite Scroll: Load more notifications when scrolled to bottom
  const loadMoreNotifications = useCallback(() => {
    const newNotifications = MOCK_NOTIFICATIONS.slice(0, 3).map(
      (item, index) => ({
        ...item,
        id: `${Math.random()}-${index}`,
        date: new Date().toISOString(),
      })
    );
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      ...newNotifications,
    ]);
  }, []);

  const renderNotification = ({ item }) => {
    const title = generateNotificationTitle(item);

    return (
      <View
        style={[
          styles.notificationContainer,
          { backgroundColor: colors.surface },
        ]}
      >
        <Avatar.Image source={{ uri: item.avatar }} size={40} />
        <View style={styles.notificationContent}>
          <Text style={[styles.notificationTitle, { color: colors.onSurface }]}>
            {title}
          </Text>
          <Text style={styles.notificationTime}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {/* App Bar */}
      <Appbar.Header style={{ backgroundColor: colors.surface }}>
        <Appbar.Content title="Notifications" />
        <Appbar.Action
          icon="delete"
          onPress={handleClearNotifications}
          accessibilityLabel="Clear notifications"
        />
      </Appbar.Header>

      {/* FlatList for Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContainer}
        onEndReached={loadMoreNotifications} // Infinite Scroll
        onEndReachedThreshold={0.5}
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Notification dismissed
      </Snackbar>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  notificationContent: {
    marginLeft: 12,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationTime: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});

export default NotificationScreen;
