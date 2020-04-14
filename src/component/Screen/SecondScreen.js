import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const SecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.paragragn}>This is the second screen</Text>
      <Button
        title='I accept all term and Agreement'
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    // flexWrap: "wrap",
    backgroundColor: "white",
  },
  paragragn: {
    flex: 4,
    padding: 20,
  },
});
