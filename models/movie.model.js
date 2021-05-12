const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {type: String, required: true},
    releaseDate: {type: Date, required: true},
    description: {type: String, required: true},
    runtime: {type: String, required: true},
    imgsrc: {type: String, required: true},
    link: {type: String, required: true}
})

module.exports = mongoose.model('Movie', movieSchema);