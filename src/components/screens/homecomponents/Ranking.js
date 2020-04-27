import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../../constants/colors";
import { IMAGE } from "../../../constants/Images";
export const Ranking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarLeft}>
        <View style={styles.userName}>
          <Text style={styles.grpcolor}>Group Names</Text>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.container}>
            <Text style={styles.credits}>800</Text>
            <Text style={styles.groupName}>krogrpname</Text>
          </View>
        </View>
      </View>
      <View style={styles.topBarCenter}>
        <View style={styles.userName}>
          <Text style={styles.grpcolor}>User Ranking</Text>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.container}>
            <Text style={styles.credits}>800</Text>
            <Text style={styles.groupName}>krousrname</Text>
          </View>
        </View>
      </View>
      <View style={styles.topBarRight}>
        <Image style={styles.iconLogo} source={IMAGE.ICON_CROWN} />
        <Text style={styles.yourkroo}>Your Kroo</Text>
        <Text style={styles.points}>900</Text>
        <Text style={styles.yourkroo}>Go On</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "white",
  },
  topBarLeft: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    marginRight: 2,
  },

  profileName: {
    justifyContent: "center",
    alignSelf: "center",
  },

  topBarCenter: {
    flex: 1,
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
    color: Colors.primary,
  },
  //   topBar
  userName: {
    alignSelf: "center",
    flex: 1,
  },
  profileBox: {
    flex: 9,
  },
  credits: {
    flex: 1,
    color: Colors.primary,
    // fontSize: 20,
  },
  groupName: {
    flex: 2,
    justifyContent: "flex-start",
    color: Colors.accent,
  },
  yourkroo: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "column",
    alignSelf: "center",
    fontSize: 20,
    color: Colors.accent,
  },
  iconLogo: {
    flex: 2,
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    alignSelf: "center",
  },
  grpcolor: {
    color: Colors.white,
  },
});
