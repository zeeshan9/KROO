const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const firebase = require("../../config/firebase");
const auth = require("../../middleware/auth");

// @route   GET /api/users/ranking
// @desc    Get top 5 users
// @access  Public
router.get("/ranking", async (req, res) => {
  try {
    const usersCollection = await firebase
      .firestore()
      .collection("users")
      .orderBy("points", "desc")
      .limit(5)
      .get();

    const users = [];

    usersCollection.forEach((user) => {
      users.push({
        name: user.data().name,
        points: user.data().points,
      });
    });

    res.json(users);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   POST /api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required and must be valid").isEmail(),
    check(
      "password",
      "Password is required and must be atleast 6 characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      const user = await firebase.auth().createUser({
        displayName: name,
        email,
      });

      const salt = await bcrypt.genSalt(10);

      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
          name,
          password: await bcrypt.hash(password, salt),
          points: 0,
        });

      const payload = {
        user: {
          id: user.uid,
        },
      };

      jwt.sign(
        payload,
        "T8jBGxyeBCTm21ixS3Jx",
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// @route   GET /api/users
// @desc    Get all users
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const usersCollection = await firebase
      .firestore()
      .collection("users")
      .get();

    const users = [];

    usersCollection.forEach((user) => {
      if (user.id !== req.user.id) {
        users.push({
          id: user.id,
          name: user.data().name,
        });
      }
    });

    res.json(users);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   POST /api/users/chat
// @desc    Create a chat
// @access  Private
router.post(
  "/chat",
  [
    auth,
    check("user1", "User 1 is requried").not().isEmpty(),
    check("user2", "User 2 is requried").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user1, user2 } = req.body;
    console.log("user1 => " + user1);
    console.log("user2 => " + user2);
    try {
      const chatsCollection = await firebase
        .firestore()
        .collection("chats")
        .get();

      const chats = [];
      chatsCollection.forEach((chat) => {
        console.log("Chats from firebase", chat.data().users);
        if (
          chat.data().users.indexOf(user1) !== -1 &&
          chat.data().users.indexOf(user2) !== -1
        ) {
          chats.push(chat);
        }
      });

      // let conversations = await Conversation.find();
      // conversations = conversations.filter((conversation) => {
      //   const users = conversation.users.map((item) => item.user);
      //   if (users.indexOf(user1) !== -1 && users.indexOf(user2) !== -1) {
      //     return conversation;
      //   }
      // });

      // let conversation;
      let res1 = {};
      let messages = [];

      if (chats.length > 0) {
        // If a conversation already exists then return that conversation
        // conversation = await Conversation.findById(conversations[0]._id)
        //   .populate("users.user", ["name", "avatar"])
        //   .populate("messages.user", ["name", "avatar"]);
        const chat = chats[0];

        const messagesCollection = await firebase
          .firestore()
          .collection("chats")
          .doc(chat.id)
          .collection("messages")
          .orderBy("createdAt", "asc")
          .get();

        messagesCollection.forEach((message) =>
          messages.push({
            user: message.data().user,
            message: message.data().message,
            createdAt: message.data().createdAt,
          })
        );

        res1 = { ...res1, id: chat.id };
      } else {
        const chat = await firebase
          .firestore()
          .collection("chats")
          .add({
            users: [user1, user2],
          });

        res1 = { ...res1, id: chat.id };
      }
      // res.json(chat.id + " chatid");
      res1 = { ...res1, messages };
      res.json(res1);
      // else {
      //   // Else create a new conversation and return that
      //   conversation = new Conversation();

      //   conversation.users.push({ user: user1 }, { user: user2 });

      //   conversation.populate("users.user", ["name", "avatar"], (err, res) => {
      //     if (err) throw err;
      //     return res;
      //   });

      //   await conversation.save();

      //   conversation = await Conversation.findById(
      //     conversation.id
      //   ).populate("users.user", ["name", "avatar"]);
      // }

      // res.json(conversation);
      res.send("fjksdjfslkdjskl");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  }
);

module.exports = router;
