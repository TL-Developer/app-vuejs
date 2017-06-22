'use strict';

const express = require('express');
const app = express();
const http = require('http');

app.use(express.static('./public'));

http.createServer(app).listen(3005, () => console.log('App Vue Rodando na porta 3005'));
