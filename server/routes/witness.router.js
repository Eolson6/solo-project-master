const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
const newWitness = req.body;
console.log('in witness post', newWitness);
    const queryText =`INSERT INTO witnesses ( "name", "phone_number", 
    "street", "unit", "city", "state", "zip")
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(queryText, [newWitness.name, newWitness.phone, newWitness.street,
    newWitness.unit, newWitness.city, newWitness.state, newWitness.zip])
    .then((response)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error in image post', error);
        res.sendStatus(500)
    })
});

module.exports = router;