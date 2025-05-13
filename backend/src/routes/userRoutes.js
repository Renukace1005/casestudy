const express = require('express');

const { createUser, getUsers } = require('../controllers/userController.js');

const router = express.Router();

router.route('/api/users')
    .post(createUser)
    .get(getUsers);

module.exports = router;