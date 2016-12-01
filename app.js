'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.status(200).send('Great info about herbs incoming!');
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
