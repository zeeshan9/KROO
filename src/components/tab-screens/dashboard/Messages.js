import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text>Your messages</Text>
      <Text>List of messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default Messages;
