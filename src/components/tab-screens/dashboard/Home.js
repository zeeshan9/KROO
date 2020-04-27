import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import CoinBar from '../../layout/home-components/CoinBar';
import ProfileBox from '../../layout/home-components/ProfileBox';
// import { Ranking } from '../../screens/homecomponents/Ranking';
import Colors from '../../../constants/colors';

const Home = ({ auth }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CoinBar auth={auth} />
      </View>
      <View style={styles.middleContainer}>
        <ProfileBox auth={auth} />
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
    backgroundColor: Colors.darkBlack,
  },
  topContainer: {
    flex: 1,
    paddingVertical: 3,
  },
  middleContainer: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: Colors.lightBlack,
  },
  // bottomcontainer: {
  //   flex: 2,
  //   flexDirection: 'row',
  //   paddingVertical: 3,
  // },
});

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
