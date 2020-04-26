const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const firebase = require('../../config/firebase');

// @route   GET /api/kroos/messages/:id
// @desc    Get all messages in a kroo
// @access  Private
router.get('/messages/:id', auth, async (req, res) => {
  try {
    const messagesCollection = await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.id)
      .collection('messages')
      .get();

    const messages = [];

    messagesCollection.forEach((message) =>
      messages.push({
        user: message.data().user,
        message: message.data().message,
      })
    );

    res.json(messages);
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

// @route   GET /api/kroos/user
// @desc    Get all kroos for user
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const kroosCollection = await firebase
      .firestore()
      .collection('kroos')
      .where('admin', '==', req.user.id)
      .get();

    const kroos = [];

    kroosCollection.forEach((kroo) =>
      kroos.push({
        id: kroo.id,
        admin: kroo.data().admin,
        name: kroo.data().name,
        description: kroo.data().description,
      })
    );

    res.json(kroos);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   GET /api/kroos
// @desc    Get all kroos
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const kroosCollection = await firebase
      .firestore()
      .collection('kroos')
      .get();

    const kroos = [];

    kroosCollection.forEach((kroo) => {
      kroos.push({
        id: kroo.id,
        admin: kroo.data().admin,
        name: kroo.data().name,
        description: kroo.data().description,
      });
    });

    res.json(kroos);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   GET /api/kroos/:id
// @desc    Get kroo by id
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const kroo = await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.id)
      .get();

    const membersCollection = await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.id)
      .collection('members')
      .get();

    const members = [];

    membersCollection.forEach((member) =>
      members.push({ user: member.data().user })
    );

    res.json({
      id: req.params.id,
      admin: kroo.data().admin,
      name: kroo.data().name,
      description: kroo.data().description,
      members,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   POST /api/kroos
// @desc    Create a new kroo
// @access  Private
router.post(
  '/',
  [
    auth,
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    try {
      let kroo = await firebase.firestore().collection('kroos').add({
        admin: req.user.id,
        name,
        description,
      });

      kroo = await kroo.get();

      res.json({
        id: kroo.id,
        admin: kroo.data().admin,
        name: kroo.data().name,
        description: kroo.data().description,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// @route   PUT /api/kroos/member/add/:kroo_id/:user_id
// @desc    Add a member to a kroo
// @access  Private
router.put('/member/add/:kroo_id/:user_id', auth, async (req, res) => {
  try {
    const members = await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.kroo_id)
      .collection('members')
      .where('user', '==', req.params.user_id)
      .get();

    let count = 0;
    members.forEach((member) => count++);

    if (count > 0) {
      return res.status(400).json({ msg: 'Already a member' });
    }

    await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.kroo_id)
      .collection('members')
      .add({
        user: req.params.user_id,
      });

    const adminId = await (
      await firebase
        .firestore()
        .collection('kroos')
        .doc(req.params.kroo_id)
        .get()
    ).data().admin;

    const user = await (
      await firebase.firestore().collection('users').doc(adminId).get()
    ).data();

    await firebase
      .firestore()
      .collection('users')
      .doc(adminId)
      .set({
        password: user.password,
        points: user.points + 4,
      });

    res.json({ msg: 'Member added' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   PUT /api/kroos/member/remove/:kroo_id/:user_id
// @desc    Remove a member from a kroo
// @access  Private
router.put('/member/remove/:kroo_id/:user_id', auth, async (req, res) => {
  try {
    const members = await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.kroo_id)
      .collection('members')
      .where('user', '==', req.params.user_id)
      .get();

    let memberId;
    members.forEach((member) => (memberId = member.id));
    console.log('Member ID: ', memberId);

    await firebase
      .firestore()
      .collection('kroos')
      .doc(req.params.kroo_id)
      .collection('members')
      .doc(memberId)
      .delete();

    res.json({ msg: 'Member removed' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// @route   PUT /api/kroos/:id
// @desc    Update a kroo
// @access  Private
router.put(
  '/:id',
  [
    auth,
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    try {
      let kroo = await firebase
        .firestore()
        .collection('kroos')
        .doc(req.params.id)
        .set({
          admin: req.user.id,
          name,
          description,
        });

      kroo = await (
        await firebase.firestore().collection('kroos').doc(req.params.id).get()
      ).data();

      res.json({
        id: req.params.id,
        admin: kroo.admin,
        name: kroo.name,
        description: kroo.description,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// @route   DELETE /api/kroos/:id
// @desc    Delete a kroo
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    await firebase.firestore().collection('kroos').doc(req.params.id).delete();

    res.json({ msg: 'KROO removed' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
