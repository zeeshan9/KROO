import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { krooAdded } from "../../actions/kroo";
import { showAlert } from "../../actions/alert";

const AddKroo = ({ navigation, showAlert, krooAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const { name, description } = formData;

  const PROPERTY_NAME = "name";
  const PROPERTY_DESCRIPTION = "description";

  const onChangeText = (text, property) => {
    switch (property) {
      case PROPERTY_NAME:
        setFormData({ ...formData, name: text });
        break;
      case PROPERTY_DESCRIPTION:
        setFormData({ ...formData, description: text });
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (name === "" || description === "") {
      showAlert("All fields are required");
    } else {
      krooAdded(name, description, navigation);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD A KROO</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Add a Kroo'
        value={name}
        onChangeText={(text) => onChangeText(text, PROPERTY_NAME)}
      />
      <TextInput
        // secureTextEntry={true}
        style={styles.textInput}
        placeholder='Kroo Description'
        value={description}
        onChangeText={(text) => onChangeText(text, PROPERTY_DESCRIPTION)}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>CREATE A KROO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  title: {
    fontSize: 60,
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
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#0066cc",
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
});

AddKroo.propTypes = {
  navigation: PropTypes.object.isRequired,
  showAlert: PropTypes.func.isRequired,
  krooAdded: PropTypes.func.isRequired,
};
// export default AddKroo;
export default connect(null, { krooAdded, showAlert })(AddKroo);
