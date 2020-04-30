import {
  KROO_ADDED_SUCCESSFULLY,
  KROO_ERROR,
  ALL_KROOS_LOADED,
} from '../actions/types';

const initialState = {
  krooGroup: null,
  allKroosGroup: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_KROOS_LOADED:
      return {
        ...state,
        allKroosGroup: payload,
        loading: false,
      };
    case KROO_ADDED_SUCCESSFULLY:
      return {
        ...state,
        krooGroup: payload,
        loading: false,
      };
    case KROO_ERROR:
      return {
        ...state,
        loading: false,
      };
    case KROO_ADDED_SUCCESSFULLY:
    default:
      return state;
  }
}
