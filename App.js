import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./src/component/Screen/HomeScreen";
import { RegistrationScreen } from "./src/component/Screen/RegistrationScreen";
import { SecondScreen } from "./src/component/Screen/SecondScreen";

const navOptionHandler = () => ({
  // To show or hide the header in the app
  headerShown: false,
});

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Registration'>
        <StackApp.Screen
          name='Registration'
          component={RegistrationScreen}
          options={navOptionHandler}
        ></StackApp.Screen>

        <StackApp.Screen
          name='Home'
          component={HomeScreen}
          options={navOptionHandler}
        ></StackApp.Screen>

        <StackApp.Screen
          name='Second'
          component={SecondScreen}
          options={navOptionHandler}
        ></StackApp.Screen>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
