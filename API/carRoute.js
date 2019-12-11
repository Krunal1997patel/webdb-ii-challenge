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

router.get('/:id', (req, res) => {
    databass.select('*').from('carInfo').where({ id: req.params.id }).first()
    .then(carID => {
        res.status(200).json(carID)
    })
    .catch(err => {
        console.log(err, 'from GET to get car by id')
        res.status(500).json({
            error: 'Can not get that car by that ID'
        })
    })
})

router.post('/', (req, res) => {
    const body = req.body;

    if(!body.vin || !body.make || !body.model || !body.mileage) {
        res.status(400).json({
            error: 'Please prove vin, make, model, or mileage to make a post'
        })
    }else{
        databass.insert(body, 'id').into('carInfo')
        .then(newData => {
            res.status(201).json(newData)
        })
        .catch(err => {
            console.log(err ,'from POST to add new car')
            res.status(500).json({
                error: 'can not add new car data in the databass'
            })
        })

    }
})

module.exports = router;