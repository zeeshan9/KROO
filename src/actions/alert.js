import { ToastAndroid } from 'react-native';

// This function is used to show a toast on screen
export const showAlert = (message) => (dispatch) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};
