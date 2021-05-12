const movieCtrl = {}
const Movie = require('../models/movie.model')

movieCtrl.registerMovie = async (req,res) => {
    const movie = new Movie({
        name: req.body.name,
        releaseDate: new Date(req.body.releaseDate), //Ej: 2019-04-22
        description: req.body.description,
        runtime: req.body.runtime,
        imgsrc: req.body.imgsrc,
        link: req.body.link
    })

    movie.save().then(data => {
        res.json({message: "registered!", info: data});
    }).catch(err => {
        res.json({message: err})
    })
}

movieCtrl.getAllMovies = async (req,res) => {
    const movies = await Movie.find();
    res.json(movies);
}

movieCtrl.getMovieById = async (req,res) => {
    Movie.findById(req.params.movieID).then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: "Movie does not exist"});
    })
}


module.exports = movieCtrl;