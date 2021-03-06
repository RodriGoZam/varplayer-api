const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.contoller');


router.post('/', userCtrl.registerUser);

router.get('/', userCtrl.getAllUsers);

router.get('/:userID', userCtrl.getUserByID);

router.delete('/:userID', userCtrl.deleteUser);

module.exports = router;