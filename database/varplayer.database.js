const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect("mongodb+srv://admin:admin@clusterdb.rmmie.mongodb.net/varplayerdb?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(console.log('Connected to DB'))
.catch(err => console.log(err))

module.exports = mongoose;