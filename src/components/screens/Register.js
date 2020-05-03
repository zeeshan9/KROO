import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";
import { showAlert } from "../../actions/alert";
import colors from "../../constants/colors";

const Register = ({ navigation, showAlert, registerUser }) => {
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = useState(
    false
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const { name, email, password, password1 } = formData;

  const PROPERTY_NAME = "name";
  const PROPERTY_EMAIL = "email";
  const PROPERTY_PASSWORD = "password";
  const PROPERTY_PASSWORD1 = "password1";

  const onChangeText = (text, property) => {
    switch (property) {
      case PROPERTY_NAME:
        setFormData({ ...formData, name: text });
        break;
      case PROPERTY_EMAIL:
        setFormData({ ...formData, email: text });
        break;
      // PROPERTY_NAME;
      case PROPERTY_PASSWORD:
        setFormData({ ...formData, password: text });
        break;
      case PROPERTY_PASSWORD1:
        setFormData({ ...formData, password1: text });
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (!termsAndConditionsAccepted) {
      showAlert("Please accept the terms and conditions");
    } else if (
      name === "" ||
      email === "" ||
      password === "" ||
      password1 === ""
    ) {
      showAlert("All fields are required");
    } else if (password !== password1) {
      showAlert("Password do not match");
    } else {
      registerUser(name, email, password, navigation);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Fill in the following information to create an account
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder='Full name'
        value={name}
        onChangeText={(text) => onChangeText(text, PROPERTY_NAME)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Email'
        value={email}
        onChangeText={(text) => onChangeText(text, PROPERTY_EMAIL)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => onChangeText(text, PROPERTY_PASSWORD)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Confirm Password'
        secureTextEntry={true}
        value={password1}
        onChangeText={(text) => onChangeText(text, PROPERTY_PASSWORD1)}
      />
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={termsAndConditionsAccepted}
          onValueChange={() =>
            setTermsAndConditionsAccepted(!termsAndConditionsAccepted)
          }
        />
        <Text style={styles.label}>I accept the terms and conditions</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroudColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  text: {
    width: "80%",
    fontSize: 22,
    marginBottom: 20,
    color: "white",
  },

  textInput: {
    width: "80%",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 22,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#ec7600",
    width: "80%",
    padding: 12,
    marginTop: 18,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
  },
});

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
  showAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, {
  showAlert,
  registerUser,
})(Register);
