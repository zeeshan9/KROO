import {
  USER_ERROR,
  USER_LOADED,
  SERVER_URL,
  REGISTRATION_SUCCESSSFUL,
  LOGIN_SUCCESSSFUL,
  USER_RANKING_LOADED,
} from "./types";
import { showAlert } from "./alert";
import axios from "axios";
import { AsyncStorage } from "react-native";

// This function is used to load the user with the token
export const loadUser = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");

    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    const res = await axios.get(`${SERVER_URL}/api/auth/me`, config);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: USER_ERROR });
  }
};

// This function is used to login the user
export const loginUser = (email, password, navigation) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${SERVER_URL}/api/auth`, body, config);

    await AsyncStorage.setItem("token", res.data.token);

    dispatch({
      type: LOGIN_SUCCESSSFUL,
      payload: res.data.token,
    });

    dispatch(showAlert("Login successful"));

    navigation.navigate("Dashboard");
  } catch (err) {
    dispatch({ type: USER_ERROR });
    dispatch(showAlert("Invalid credentials"));
  }
};

// This function is used to register a new user
export const registerUser = (name, email, password, navigation) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${SERVER_URL}/api/users`, body, config);

    await AsyncStorage.setItem("token", res.data.token);

    dispatch({
      type: REGISTRATION_SUCCESSSFUL,
      payload: res.data.token,
    });

    dispatch(showAlert("Registration successful"));

    navigation.navigate("Login");
  } catch (err) {
    dispatch({ type: USER_ERROR });
    dispatch(showAlert(err.message));
  }
};

export const loadUserRanking = () => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER_URL}/api/users/ranking`);

    dispatch({
      type: USER_RANKING_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: USER_ERROR });
    dispatch(showAlert(err.message));
  }
};
