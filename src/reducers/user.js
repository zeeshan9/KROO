import { USER_ERROR, ALL_USER_LOADED, USER_MSG_LOADED } from "../actions/types";

const initialState = {
  //   krooGroup: null,
  allUsersLoaded: [],
  userChat: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_USER_LOADED:
      return {
        ...state,
        allUsersLoaded: payload,
        loading: false,
      };
    case USER_MSG_LOADED:
      return {
        ...state,
        userChat: payload,
        loading: false,
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
