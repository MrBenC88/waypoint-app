import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import StackNavigator from "./navigation/StackNavigator";
import { addTestUser, fetchTestUsers } from "./services/testFirebase";

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
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
