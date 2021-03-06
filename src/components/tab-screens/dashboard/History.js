import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../../constants/colors";
// import { CoinBar } from "../../screens/homecomponents/CoinBar";
// import { Ranking } from '../../screens/homecomponents/Ranking';
import { UserHistory } from "../../screens/historycomponent/UserHistory";
import Ranking from "../../layout/home-components/Ranking";
import { ScrollView } from "react-native-gesture-handler";

const History = ({ auth }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.topContainer}>
        <CoinBar auth={auth} />
      </View> */}
      {/* <View style={styles.middleContainer}><UserHistory /></View> */}
      {/* <View style={styles.bottomcontainer}> */}
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <Ranking />
      </ScrollView>
      {/* </View> */}

      {/* <Text>{auth.displayName}</Text> */}
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
export default History;
