const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movie.controller');


router.post('/', movieCtrl.registerMovie);

router.get('/', movieCtrl.getAllMovies);

router.get('/:movieID', movieCtrl.getMovieById);

router.delete('/:movieID', movieCtrl.deleteMovie);

module.exports = router;