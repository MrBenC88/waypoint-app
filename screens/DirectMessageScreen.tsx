import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { Text, useTheme, Appbar, Avatar, IconButton } from "react-native-paper";

const MOCK_MESSAGES = [
  {
    id: "1",
    sender: "Alice",
    message: "Hey! How was your trip?",
    time: "2:01 PM",
  },
  {
    id: "2",
    sender: "You",
    message: "It was amazing! I loved Tokyo 🗼",
    time: "2:02 PM",
  },
  {
    id: "3",
    sender: "Alice",
    message: "Awesome! I want to go there next year.",
    time: "2:03 PM",
  },
];

const DirectMessageScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const { user } = route.params;
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState("");

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "You";
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userMessage : styles.friendMessage,
        ]}
      >
        <Text style={{ color: colors.onSurface }}>{item.message}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    );
  };

  return (
    <>
      {/* App Bar */}
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Avatar.Image source={{ uri: user.avatar }} size={40} />
        <Appbar.Content title={user.name} />
      </Appbar.Header>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          style={styles.input}
        />
        <IconButton
          icon="send"
          onPress={() => console.log("Send message:", inputText)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  messageBubble: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  friendMessage: {
    backgroundColor: "#e0e0e0",
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  messageTime: {
    fontSize: 10,
    color: "#666",
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default DirectMessageScreen;
