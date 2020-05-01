import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image, RefreshControl } from "react-native";
import Colors from "../../../constants/colors";
import { IMAGE } from "../../../constants/Images";
import { connect } from "react-redux";
import { loadUserRanking } from "../../../actions/auth";
import { loadKrooRanking } from "../../../actions/kroo";

const Ranking = ({
  auth: { loading, users },
  loadUserRanking,
  kroo,
  loadKrooRanking,
}) => {
  useEffect(() => {
    loadUserRanking();
    loadKrooRanking();
  }, []);
  const handlerResfresh = () => {
    // navigation.navigate("Chat");
    setisRefreshing(true);
    loadUserRanking();
    setisRefreshing(false);
  };
  const [isRefreshing, setisRefreshing] = useState(false);
  const onPress = () => {
    handlerResfresh();
    <RefreshControl
      refreshing={isRefreshing}
      onRefresh={handlerResfresh.bind(this)}
    />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <Text style={styles.heading}>Users</Text>
        {!loading && users.length > 0 ? (
          users.map((user) => (
            <View style={styles.innerContainer}>
              <Text style={styles.normalTextBold}>{user.points} : </Text>
              <Text style={styles.normalText}>{user.name}</Text>
            </View>
          ))
        ) : (
          <Text></Text>
        )}
      </View>
      <View style={styles.outerContainer}>
        <Text style={styles.heading} onPress={() => onPress()}>
          KROO
        </Text>
        {!kroo.loading && kroo.allRankingGroup.length > 0 ? (
          kroo.allRankingGroup.map((kroo) => (
            <View style={styles.innerContainer}>
              <Text style={styles.normalTextBold}>{kroo.points} : </Text>
              <Text style={styles.normalText}>{kroo.name}</Text>
            </View>
          ))
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    marginRight: 2,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lightBlack,
    justifyContent: "center",
  },
  heading: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  normalText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 15,
  },
  normalTextBold: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  // profileName: {
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  // },

  // topBarCenter: {
  //   flex: 1,
  //   backgroundColor: Colors.lightBlack,
  //   padding: 5,
  //   marginRight: 2,
  // },
  // topBarRight: {
  //   flex: 1,
  //   backgroundColor: Colors.lightBlack,
  //   padding: 5,
  // },
  // points: {
  //   paddingTop: 5,
  //   alignSelf: 'center',
  //   fontSize: 50,
  //   color: Colors.primary,
  // },
  // //   topBar
  // userName: {
  //   alignSelf: 'center',
  //   flex: 1,
  // },
  // profileBox: {
  //   flex: 9,
  // },
  // credits: {
  //   flex: 1,
  //   color: Colors.primary,
  // },
  // groupName: {
  //   flex: 2,
  //   justifyContent: 'flex-start',
  //   color: Colors.accent,
  // },
  // yourkroo: {
  //   flex: 1,
  //   paddingTop: 5,
  //   flexDirection: 'column',
  //   alignSelf: 'center',
  //   fontSize: 20,
  //   color: Colors.accent,
  // },
  // iconLogo: {
  //   flex: 2,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 150 / 2,
  //   alignSelf: 'center',
  // },
});

Ranking.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUserRanking: PropTypes.func.isRequired,
  loadKrooRanking: PropTypes.func.isRequired,
  kroo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  kroo: state.kroo,
});

export default connect(mapStateToProps, {
  loadUserRanking,
  loadKrooRanking,
})(Ranking);
