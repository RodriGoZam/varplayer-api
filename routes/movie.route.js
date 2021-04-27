const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movie.controller');


router.post('/', movieCtrl.registerMovie);

module.exports = router;