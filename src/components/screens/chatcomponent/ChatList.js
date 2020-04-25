import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const ChatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userName}>
        <Text>userName</Text>
      </View>
      <Text>Chat list here</Text>
      {/* Flat list or gifted chat */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  userName: {
    alignSelf: "center",
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
});
