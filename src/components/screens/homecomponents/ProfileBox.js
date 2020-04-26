import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../../constants/colors";

export const ProfileBox = ({ props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userName}>
        <Text style={styles.text}>userName</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.text}>Name: Erika</Text>
        <Text style={styles.text}>DOB: 20/03/2020</Text>
        <Text style={styles.text}>pakistan: Itly</Text>
        <Text style={styles.text}>payment: Visa</Text>
      </View>
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
  profileBox: {
    flex: 9,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: Colors.textColor,
  },
});
