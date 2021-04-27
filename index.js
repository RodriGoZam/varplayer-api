const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./database/varplayer.database')

app.use(bodyParser.json());

const userRoute = require('./routes/user.route');
const movieRoute = require('./routes/movie.route');

//Routes
app.use('/user', userRoute);
app.use('/movie', movieRoute);

app.get('/', (req ,res) => {
    res.send('Home Page');
});

app.listen(3000);