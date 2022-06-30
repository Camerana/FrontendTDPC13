// npm i express
const express = require('express');
const app = new express();

app.use(express.static('public'));

// localhost:3000
app.get('/', function (req, res) {
    // res.send('<h1>Home Page</h1>');
    res.sendFile('index.html', { root: __dirname + '/public' });
});

// localhost:3000/contatti
app.get('/contatti', (req, res) => {
    // res.send('<h1>Contact Page</h1>');
    res.sendFile('contact.html', { root: __dirname + '/public' });
});

// localhost:3000/api
app.get('/api', (req, res) => {
    res.send('{ "result": "ciao" }');
});

// resta in ascolto della porta 3000
app.listen(3000, function (req, res) {
    console.log('server run on port 3000');
});