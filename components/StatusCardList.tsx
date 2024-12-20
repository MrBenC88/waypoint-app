import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { MOCK_STATUSES } from "../data/mockData";

import StatusCard from "./StatusCard";

const StatusCardList = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles.title, { color: colors.onSurface }]}>
        Status Updates
      </Text>
      {MOCK_STATUSES.map((status) => (
        <StatusCard key={status.id} status={status} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 10,
  },
});

export default StatusCardList;
