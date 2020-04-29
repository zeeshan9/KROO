import {
  SERVER_URL,
  KROO_ADDED_SUCCESSFULLY,
  KROO_ERROR,
  ALL_KROOS_LOADED,
} from "./types";
import { showAlert } from "./alert";
import axios from "axios";
import { AsyncStorage } from "react-native";

// This function is used to add a kroo group
export const krooAdded = (name, description, navigation) => async (
  dispatch
) => {
  const token = await AsyncStorage.getItem("token");

  const config = {
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, description });

  try {
    const res = await axios.post(`${SERVER_URL}/api/kroos`, body, config);

    dispatch({
      type: KROO_ADDED_SUCCESSFULLY,
      payload: res.data,
    });

    dispatch(showAlert("Kroo Added Succesfully"));

    navigation.navigate("Chat");
  } catch (err) {
    dispatch({ type: KROO_ERROR });
    dispatch(showAlert(err.message));
  }
};

// This function is used to load the all the kroo
export const getAllKroos = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");

    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    const res = await axios.get(`${SERVER_URL}/api/kroos`, config);

    // console.log(res.data);

    dispatch({
      type: ALL_KROOS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: KROO_ERROR });
  }
};
