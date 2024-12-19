import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { addTestUser, fetchTestUsers } from "./services/testFirebase";

// Custom Theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4CAF50", // Adventure Green
    accent: "#FF9800", // Bright Orange
    background: "#F5F5F5", // Light background
    surface: "#FFFFFF",
    text: "#333333",
    placeholder: "#666666",
  },
};

export default function App() {
  const [testUserName, setTestUserName] = useState<string>("");

  // useEffect(() => {
  //   const testFirebase = async () => {
  //     await addTestUser();
  //     const users = await fetchTestUsers();
  //     console.log("Fetched Users: ", users);

  //     if (users) {
  //       console.log("User: ", (users[0].name).toString());
  //       setTestUserName(users[0].name);
  //     }
  //   };
  //   testFirebase();
  // }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
