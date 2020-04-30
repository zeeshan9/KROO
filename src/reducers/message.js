import {
  ALL_MESSAGES_LOADED,
  MESSAGE_ERROR,
  MESSAGE_SENT,
} from '../actions/types';

const initialState = {
  messages: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_MESSAGES_LOADED:
      return {
        ...state,
        messages: payload,
        loading: false,
      };
    case MESSAGE_SENT:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, payload],
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
