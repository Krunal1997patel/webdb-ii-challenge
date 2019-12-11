const express = require('express');
const router = express.Router();
const databass = require('../data/dbConfig.js');

router.use(express.json());

router.get('/', (req, res) => {
    databass.select('*').from('carInfo')
    .then(cars =>{
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log(err, 'from GET to get all cars')
        res.status(500).json({
            error: 'Can not get all the car data'
        })
    })
})


module.exports = router;