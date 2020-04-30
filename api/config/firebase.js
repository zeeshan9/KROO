const firebase = require('firebase-admin');

// const credentials = require('./firebase-credentials.json');
const credentials = require('./firebase-credentials-1.json');

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),

  // apiKey: "AIzaSyD7fhHwPtq6B0rkxvuyaDYsHFskg3igEJk",
  // authDomain: "kroo-c9025.firebaseapp.com",
  // databaseURL: "https://kroo-c9025.firebaseio.com",
  // projectId: "kroo-c9025",
  // storageBucket: "kroo-c9025.appspot.com",
  // messagingSenderId: "464171276433",
  // appId: "1:464171276433:web:f6fdcfa641bddc6b670730",

  apiKey: 'AIzaSyB-OjR-G_pnT1IQYUS6J4bHVE8BehWrPnA',
  authDomain: 'kroo-b947d.firebaseapp.com',
  databaseURL: 'https://kroo-b947d.firebaseio.com',
  projectId: 'kroo-b947d',
  storageBucket: 'kroo-b947d.appspot.com',
  messagingSenderId: '2344336447',
  appId: '1:2344336447:web:fb8db9207ad76ae2614c8a',
});

module.exports = firebase;
