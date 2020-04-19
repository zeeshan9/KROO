import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Invitations = () => {
  return (
    <View style={styles.container}>
      <Text>Invitations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Invitations;
