import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { CoinBar } from "../../screens/homecomponents/CoinBar";
import { ProfileBox } from "../../screens/homecomponents/ProfileBox";
import { Ranking } from "../../screens/homecomponents/Ranking";
import Colors from "../../../constants/colors";

const Home = ({ auth }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CoinBar auth={auth} />
      </View>
      <View style={styles.middleContainer}>
        <ProfileBox />
      </View>
      <View style={styles.bottomcontainer}>
        <Ranking />
      </View>

      {/* <Text>{auth.displayName}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // padding: 2,
    backgroundColor: Colors.darkBlack,
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

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
