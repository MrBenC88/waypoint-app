import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, Card, useTheme } from "react-native-paper";

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

const styles = StyleSheet.create({
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
});

export default StatusCard;
