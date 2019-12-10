const express = require('express');
const helmet = require('helmet');
const carRoute = require('./API/carRoute.js')
const server = express();

server.use(helmet());

server.get('/', (req, res) => {
    res.send(`<h1>You are up and runing sir</h1>`)
})

server.use('/api/car', carRoute);


module.exports = server;