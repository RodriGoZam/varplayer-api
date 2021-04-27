const movieCtrl = {}
const Movie = require('../models/movie.model')

movieCtrl.registerMovie = async (req,res) => {
    const movie = new Movie({
        name: req.body.name,
        releaseDate: new Date(req.body.releaseDate), //Ej: 2019-04-22
        description: req.body.description,
        runtime: req.body.runtime,
        link: req.body.link,
        timesWatched: 0 //Es 0 por defecto
    })

    movie.save().then(data => {
        res.json({message: "registered!", info: data});
    }).catch(err => {
        res.json({message: err})
    })
}

module.exports = movieCtrl;