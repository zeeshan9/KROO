import {
  USER_LOADED,
  USER_ERROR,
  REGISTRATION_SUCCESSSFUL,
  LOGIN_SUCCESSSFUL,
} from '../actions/types';
import { AsyncStorage } from 'react-native';

const initialState = {
  token: null,
  user: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTRATION_SUCCESSSFUL:
    case LOGIN_SUCCESSSFUL:
      return {
        ...state,
        token: payload,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
