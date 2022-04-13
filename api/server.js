const express = require('express');
const app = express();
const cors = require('cors');
const { Fibonaccify } = require('./utils');

app.use(cors());

app.get('/api/fibonacci/:number', (req, res) =>{
    const { number } = req.params;
    res.json(Fibonaccify(number));
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});