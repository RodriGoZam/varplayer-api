const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('./database/varplayer.database')
let port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const userRoute = require('./routes/user.route');
const movieRoute = require('./routes/movie.route');

//Routes
app.use('/user', userRoute);
app.use('/movie', movieRoute);

app.get('/', (req ,res) => {
    res.send('Home Page');
});

app.listen(port);