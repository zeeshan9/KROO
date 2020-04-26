const firebase = require('../config/firebase');

// Add message to a conversation
const addMessage = async (room, user, message) => {
  try {
    await firebase
      .firestore()
      .collection('kroos')
      .doc(room)
      .collection('messages')
      .add({
        user,
        message,
      });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { addMessage };
