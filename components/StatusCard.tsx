import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, Card, useTheme } from "react-native-paper";
import {
  AvailabilityStatusEmojis,
  PurposeOfVisitEmojis,
  HostStatusEmojis,
} from "../data/enums";

const StatusCard = ({ status }) => {
  const { colors } = useTheme();

  // Helper function to render city mention
  const renderCityMention = () =>
    status.city ? (
      <>
        <Text style={{ color: colors.onSurface }}> in </Text>
        <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
          {status.city}
        </Text>
      </>
    ) : null;

  // Generate the status message based on the type of update
  const getStatusMessage = () => {
    switch (status.type) {
      case "availability":
        return (
          <Text style={{ color: colors.onSurface }}>
            {AvailabilityStatusEmojis[status.status]} {status.name} is now{" "}
            <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
              {status.status}
            </Text>
            {renderCityMention()}
          </Text>
        );

      case "purpose":
        return (
          <Text style={{ color: colors.onSurface }}>
            {PurposeOfVisitEmojis[status.purpose]} {status.name} is{" "}
            <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
              {status.purpose}
            </Text>
            {renderCityMention()}
          </Text>
        );

      case "host":
        return (
          <Text style={{ color: colors.onSurface }}>
            {HostStatusEmojis[status.hostStatus]} {status.name} is now{" "}
            <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
              {status.hostStatus}
            </Text>
            {renderCityMention()}
          </Text>
        );

      case "location":
        return (
          <Text style={{ color: colors.onSurface }}>
            📍 {status.name} just arrived in{" "}
            <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
              {status.city}
            </Text>
          </Text>
        );

      case "leaving":
        return (
          <Text style={{ color: colors.onSurface }}>
            ✈️ {status.name} is leaving{" "}
            <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
              {status.city}
            </Text>{" "}
            soon
          </Text>
        );

      case "trip":
        return (
          <Text style={{ color: colors.onSurface }}>
            🧭 {status.name} added a new trip to{" "}
            <Text style={{ fontWeight: "bold", color: colors.onSurface }}>
              {status.city}
            </Text>{" "}
            for {status.date}
          </Text>
        );

      default:
        return null;
    }
  };

  return (
    <Card style={[styles.statusCard, { backgroundColor: colors.surface }]}>
      <View style={styles.cardHeader}>
        <Avatar.Image
          source={{ uri: status.avatar }}
          size={40}
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

      <View style={styles.cardContent}>{getStatusMessage()}</View>
    </Card>
  );
};

const styles = StyleSheet.create({
  statusCard: {
    marginBottom: 6,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
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
    fontSize: 16,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  cardContent: {
    paddingTop: 4,
  },
  cardStatusText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default StatusCard;
