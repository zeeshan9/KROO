import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { IMAGE } from '../../../constants/Images';
import Colors from '../../../constants/colors';

const CoinBar = ({ auth: { loading, user } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarLeft}>
        <Image style={styles.iconLogo} source={IMAGE.ICON_PROFILE} />
      </View>
      <View style={styles.topBarCenter}>
        <Text style={styles.points}>
          {!loading && user !== null ? user.points : ''}
        </Text>
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
    flexDirection: 'row',
  },
  topBarLeft: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
  },
  topBarCenter: {
    flex: 2,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarRight: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    paddingTop: 5,
    fontSize: 50,
    color: Colors.textColor,
  },
});

export default CoinBar;
