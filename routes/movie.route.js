const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movie.controller');


router.post('/', movieCtrl.registerMovie);

router.get('/', movieCtrl.getAllMovies);

module.exports = router;