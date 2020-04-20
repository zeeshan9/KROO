import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2wHF-tTXamc6-54cL0ZAq1O5aP0VyJsI',
  authDomain: 'kroo-d99da.firebaseapp.com',
  databaseURL: 'https://kroo-d99da.firebaseio.com',
  projectId: 'kroo-d99da',
  storageBucket: 'kroo-d99da.appspot.com',
  messagingSenderId: '576786370685',
  appId: '1:576786370685:web:b862ee319352ea98c72114',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
