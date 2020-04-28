import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../../../constants/colors";
import { CoinBar } from "../../screens/homecomponents/CoinBar";
import ChatGroups from "../../screens/chatcomponent/ChatGroups";
import { Ranking } from "../../screens/homecomponents/Ranking";

const Chat = ({ auth, navigation }) => {
  const SampleFunction = () => {
    // Alert.alert("Floating Button Clicked");
    navigation.navigate("AddKroo");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.topContainer}>
        <CoinBar auth={auth} />
      </View> */}
      <View style={styles.middleContainer}>
        <ChatGroups navigation={navigation} />
      </View>
      <View style={styles.bottomcontainer}>
        <Ranking />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => SampleFunction()}
        style={styles.TouchableOpacityStyle}
      >
        <Image
          source={{
            uri:
              "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png",
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
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
    flex: 2,
    flexDirection: "row",
    backgroundColor: Colors.lightBlack,
  },
  bottomcontainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 3,
  },
  // FLoating action button style
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default Chat;
