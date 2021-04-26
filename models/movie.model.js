const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {type: String, required: true},
    releaseDate: {type: Date, required: true},
    description: {type: String, required: true},
    runtime: {type: String, required: true},
    timesWatched: {type: Number, required: false}
})

module.exports = mongoose.model('Movie', movieSchema);