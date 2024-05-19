'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello FS2024 DevOps Course! :-))) (((-: Nun kommen neue Änderungen von Matteo für die Übung 12. ;) XD :-D :-P :-O :-* :-/ :-| :-[ :-] :-{ :-} :-! :-@ :-# :-$ :-^ :-& :-* :-) :-(');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
