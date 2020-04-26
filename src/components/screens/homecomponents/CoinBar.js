import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { IMAGE } from "../../../constants/Images";
import Colors from "../../../constants/colors";

export const CoinBar = ({ auth }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarLeft}>
        {/* <View style={styles.iconContainer}> */}
        <Image style={styles.iconLogo} source={IMAGE.ICON_PROFILE} />
        {/* <Text style={styles.profileName}>{auth.displayName}</Text> */}
        <Text style={styles.profileName}>erika</Text>
        {/* </View> */}
      </View>
      <View style={styles.topBarCenter}>
        <Text style={styles.points}>60</Text>
      </View>
      <View style={styles.topBarRight}>
        <Image style={styles.iconLogo} source={IMAGE.ICON_EURO} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  topBarLeft: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    marginRight: 2,
    justifyContent: "space-around",
  },

  profileName: {
    justifyContent: "center",
    alignSelf: "center",
    color: Colors.textColor,
  },

  iconLogo: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    alignSelf: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.lightBlack,
    alignSelf: "center",
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 5,
  },
  topBarCenter: {
    flex: 2,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    marginRight: 2,
  },
  topBarRight: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 5,
  },
  points: {
    paddingTop: 5,
    alignSelf: "center",
    fontSize: 50,
    color: Colors.textColor,
  },
});
