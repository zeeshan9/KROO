import { USER_LOADED, USER_ERROR } from '../actions/types';

const initialState = {
  userId: null,
  displayName: null,
  credits: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        userId: payload.userId,
        displayName: payload.displayName,
        credits: payload.credits,
      };
    case USER_ERROR:
      return {
        ...state,
        userId: null,
        displayName: null,
      };
    default:
      return state;
  }
}
