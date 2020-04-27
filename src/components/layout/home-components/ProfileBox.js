import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../../constants/colors';

const ProfileBox = ({ auth: { loading, user } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Info</Text>
      <Text style={styles.text}>
        Name: {!loading && user !== null ? user.displayName : ''}
      </Text>
      <Text style={styles.text}>
        Email: {!loading && user !== null ? user.email : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    padding: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 5,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  text: {
    marginTop: 15,
    fontSize: 22,
    color: Colors.textColor,
  },
});

ProfileBox.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default ProfileBox;
