const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const firebase = require("../../config/firebase");

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

module.exports = router;
