const express = require('express');
const app = express();
require('./database/varplayer.database')

app.get('/', (req ,res) => {
    res.send('Home Page');
});

app.listen(3000);