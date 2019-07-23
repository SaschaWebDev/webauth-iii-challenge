const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./user-model.js');

const router = express.Router();

// GET ALL USERS
router.get('/', async (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
