import {
  SERVER_URL,
  KROO_ADDED_SUCCESSFULLY,
  KROO_ERROR,
  ALL_KROOS_LOADED,
  KROO_MEMBER_ADDED,
  ALL_USER_LOADED,
  USER_MSG_ERROR,
  USER_MSG_LOADED,
  USER_ERROR,
  ALL_RANKING_LOADED,
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

export const addMember = (krooId, userId) => async (dispatch) => {
  const token = await AsyncStorage.getItem("token");

  const config = {
    headers: {
      "x-auth-token": token,
    },
  };

  try {
    await axios.put(
      `${SERVER_URL}/api/kroos/member/add/${krooId}/${userId}`,
      {},
      config
    );

    dispatch({ type: KROO_MEMBER_ADDED });
  } catch (err) {
    dispatch({ type: KROO_ERROR });
  }
};

export const loadKrooRanking = () => async (dispatch) => {
  // console.log("call hota ha");
  try {
    const res = await axios.get(`${SERVER_URL}/api/kroos/ranking`);
    // console.log(res.data);

    dispatch({
      type: ALL_RANKING_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: KROO_ERROR });
    console.log(err);
  }
};

// This function is used to load the all the users
export const getAllUsers = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");

    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    const res = await axios.get(`${SERVER_URL}/api/users`, config);

    // console.log(res.data);

    dispatch({
      type: ALL_USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: USER_MSG_ERROR });
  }
};

export const createRoomforUsers = (user1, user2, navigation) => async (
  dispatch
) => {
  const token = await AsyncStorage.getItem("token");

  const config = {
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ user1, user2 });

  try {
    const res = await axios.post(`${SERVER_URL}/api/users/chat`, body, config);

    // console.log(res.data.id + "  = user messages id");

    dispatch({
      type: USER_MSG_LOADED,
      payload: res.data,
    });

    dispatch(showAlert("Kroo Added Succesfully"));

    navigation.navigate("ChatList", { id: res.data.id, userRoom: true });
  } catch (err) {
    dispatch({ type: USER_ERROR });
    dispatch(showAlert(err.message));
  }
};
