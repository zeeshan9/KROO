import {
  MESSAGE_SENT,
  ALL_MESSAGES_LOADED,
  MESSAGE_ERROR,
  SERVER_URL,
} from './types';
import { showAlert } from './alert';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const sendMessage = (user, message, createdAt = Date.now()) => (
  dispatch
) => {
  dispatch({
    type: MESSAGE_SENT,
    payload: { user, message, createdAt },
  });
};

export const getAllMessagesForKroo = (id) => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');

  const config = {
    headers: {
      'x-auth-token': token,
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.get(
      `${SERVER_URL}/api/kroos/messages/${id}`,
      config
    );

    dispatch({
      type: ALL_MESSAGES_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: MESSAGE_ERROR });
    dispatch(showAlert(err.message));
  }
};
