import { MESSAGE_SENT } from './types';

export const sendMessage = (message, user = null) => (dispatch) => {
  dispatch({
    type: MESSAGE_SENT,
    payload: { user, message },
  });
};
