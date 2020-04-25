import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <Text>userName</Text>
      </View>
      <Text>History Box here</Text>
      {/* Flat list or gifted chat */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  chat: {
    alignSelf: "center",
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
});
