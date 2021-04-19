const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./database/varplayer.database')

app.use(bodyParser.json());

const userRoute = require('./routes/user.route');

//Routes
app.use('/user', userRoute);

app.get('/', (req ,res) => {
    res.send('Home Page');
});

app.listen(3000);