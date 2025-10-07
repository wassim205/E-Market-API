const express = require('express');
const { getUsers, getOneUser, createUser, deleteUser } = require('../controllers/userController');
const router = express.Router()

router.get('/', getUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;