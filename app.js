'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/css'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, `/html/${req.url}.html`));
});


app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
