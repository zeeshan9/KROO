import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../../constants/colors";
import { CoinBar } from "../../screens/homecomponents/CoinBar";
import ChatList from "../../screens/chatcomponent/ChatList";
import ChatGroups from "../../screens/chatcomponent/ChatGroups";
import { Ranking } from "../../screens/homecomponents/Ranking";

const Chat = ({ auth, navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.topContainer}>
        <CoinBar auth={auth} />
      </View> */}
      <View style={styles.middleContainer}>
        <ChatGroups navigation={navigation} />
        {/* <ChatList /> */}
      </View>
      {/* <View style={styles.bottomcontainer}>
        <Ranking />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 3,
  },
  middleContainer: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: Colors.lightBlack,
  },
  bottomcontainer: {
    flex: 2,
    flexDirection: "row",
    paddingVertical: 3,
  },
});

export default Chat;
