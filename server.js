const express = require('express');
const server = express();
const port = 80;

server.get('/', (req, res) => res.send(':)'));

server.listen(port, () => console.log('Host ready'));
