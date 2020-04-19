import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KROO</Text>
      <TextInput style={styles.textInput} placeholder='Email' />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder='Password'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: '#ec7600' }}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
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

  title: {
    fontSize: 60,
    fontWeight: 'bold',
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
    backgroundColor: '#0066cc',
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

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
