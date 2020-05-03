import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import CoinBar from "../../layout/home-components/CoinBar";
import ProfileBox from "../../layout/home-components/ProfileBox";
import Ranking from "../../layout/home-components/Ranking";
import Colors from "../../../constants/colors";
import ShareApp from "../../layout/home-components/ShareApp";

const Home = ({ auth }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CoinBar auth={auth} />
      </View>
      <View style={styles.middleContainer}>
        <ProfileBox auth={auth} />
      </View>

      <View style={styles.ShareAppcontainer}>
        <ShareApp />
      </View>
      <View style={styles.bottomcontainer}>
        <Ranking />
        {/* <ShareApp /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlack,
  },
  topContainer: {
    flex: 2,
    paddingVertical: 3,
  },
  middleContainer: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: Colors.lightBlack,
    marginBottom: 2,
  },
  bottomcontainer: {
    flex: 3,
  },
  ShareAppcontainer: {
    flex: 1,
  },
});

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
