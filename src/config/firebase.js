import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyD7fhHwPtq6B0rkxvuyaDYsHFskg3igEJk",
  // authDomain: "kroo-c9025.firebaseapp.com",
  // databaseURL: "https://kroo-c9025.firebaseio.com",
  // projectId: "kroo-c9025",
  // storageBucket: "kroo-c9025.appspot.com",
  // messagingSenderId: "464171276433",
  // appId: "1:464171276433:web:f6fdcfa641bddc6b670730",
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
