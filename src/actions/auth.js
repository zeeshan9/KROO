import firebase from '../config/firebase';
import { USER_ERROR, USER_LOADED } from './types';
import { showAlert } from './alert';

// This function is used to login the user
export const loginUser = (email, password, navigation) => async (dispatch) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    const user = firebase.auth().currentUser;

    const res = await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get();

    dispatch({
      type: USER_LOADED,
      payload: {
        userId: user.uid,
        displayName: user.displayName,
        credits: res.data().credits,
      },
    });

    dispatch(showAlert('Login successful'));

    navigation.navigate('Dashboard');
  } catch (err) {
    dispatch({ type: USER_ERROR });
    dispatch(showAlert(err.message));
  }
};

// This function is used to register a new user
export const registerUser = (name, email, password, navigation) => async (
  dispatch
) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    const user = firebase.auth().currentUser;

    await user.updateProfile({
      displayName: name,
    });

    await firebase.firestore().collection('users').doc(user.uid).set({
      credits: 0,
    });

    dispatch({
      type: USER_LOADED,
      payload: { userId: user.uid, displayName: user.displayName, credits: 0 },
    });

    dispatch(showAlert('Registration successful'));

    navigation.navigate('Login');
  } catch (err) {
    dispatch({ type: USER_ERROR });
    dispatch(showAlert(err.message));
  }
};
