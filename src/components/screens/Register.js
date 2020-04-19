import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Fill in the following information to create an account
      </Text>
      <TextInput style={styles.textInput} placeholder='Full name' />
      <TextInput style={styles.textInput} placeholder='Email' />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Confirm Password'
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TermsAndConditions')}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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

  text: {
    width: '80%',
    fontSize: 22,
    marginBottom: 20,
  },

  textInput: {
    width: '80%',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 22,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },

  button: {
    backgroundColor: '#ec7600',
    width: '80%',
    padding: 12,
    marginTop: 18,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Register;
