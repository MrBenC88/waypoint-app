import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";
import { MOCK_STATUSES } from "../data/mockData";

// Status Card Component
const StatusCard = ({ status }) => (
  <Card style={styles.statusCard}>
    <Card.Title
      title={status.name}
      subtitle={status.date}
      left={() => <Avatar.Image source={{ uri: status.avatar }} size={50} />}
    />
    <Card.Content>
      <Text>{status.status}</Text>
    </Card.Content>
  </Card>
);

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status Feed</Text>
      <FlatList
        data={MOCK_STATUSES}
        renderItem={({ item }) => <StatusCard status={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  statusCard: {
    marginBottom: 15,
  },
});

export default FeedScreen;
