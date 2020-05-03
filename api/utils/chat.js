const firebase = require("../config/firebase");

// Add message to a conversation
const addMessage = async (room, user, message, createdAt) => {
  try {
    await firebase
      .firestore()
      .collection("kroos")
      .doc(room)
      .collection("messages")
      .add({
        user,
        message,
        createdAt,
      });
  } catch (err) {
    console.log(err.message);
  }
};

// Add message to a conversation
const addUserMessage = async (room, user, message, createdAt) => {
  try {
    await firebase
      .firestore()
      .collection("chats")
      .doc(room)
      .collection("messages")
      .add({
        user,
        message,
        createdAt,
      });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { addUserMessage, addMessage };
