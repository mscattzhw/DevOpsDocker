'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Dritte Variante die automatisch via Github alles automatisch auslösen soll!Hello FS2024 DevOps Course! :-))) (((-: Nun kommen neue Änderungen von Matteo für die Übung 12. ;) XD :-D :-P :-O :-* :-/ :-| :-[ :-] :-{ :-} Änderung 22222222222222 :-! :-@ :-# :-$ :-^ :-& :-* :-) :-(');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
