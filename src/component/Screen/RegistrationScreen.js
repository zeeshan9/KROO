import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const RegistrationScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ margin: 30, alignSelf: "flex-end" }}
        onPress={() => props.navigation.navigate("Second")}
      >
        <Text>next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    backgroundColor: "white",
  },
});
