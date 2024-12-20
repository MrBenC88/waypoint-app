import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { addTestUser, fetchTestUsers } from "./services/testFirebase";
import { forestGreen as activeTheme } from "./themes/themes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <PaperProvider theme={activeTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>{" "}
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
