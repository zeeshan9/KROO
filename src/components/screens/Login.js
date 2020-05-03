import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { IMAGE } from "../../constants/Images";
import colors from "../../constants/colors";
const Login = ({ navigation, loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const PROPERTY_EMAIL = "email";
  const PROPERTY_PASSWORD = "password";

  const onChangeText = (text, property) => {
    switch (property) {
      case PROPERTY_EMAIL:
        setFormData({ ...formData, email: text });
        break;
      case PROPERTY_PASSWORD:
        setFormData({ ...formData, password: text });
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.logo}>KROO</Text> */}
      <View style={styles.title}>
        <Image source={IMAGE.ICON_LOGO} style={styles.image} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder='Email'
        value={email}
        onChangeText={(text) => onChangeText(text, PROPERTY_EMAIL)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder='Password'
        value={password}
        onChangeText={(text) => onChangeText(text, PROPERTY_PASSWORD)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => loginUser(email, password, navigation)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: "#ec7600" }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroudColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  textInput: {
    width: "80%",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 22,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 25,
    color: "white",
    elevation: 4,
  },

  button: {
    backgroundColor: "#0066cc",
    width: "80%",
    padding: 12,
    marginTop: 18,
    borderRadius: 25,
    borderColor: "silver",
    borderWidth: 1 / 2,
    elevation: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, {
  loginUser,
})(Login);
