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
    router.post('/', (req, res) => {
        const newVehicle = req.body;
        const queryText = `INSERT INTO vehicle( "incident.id", "vehicle_make", "vehicle_year", 
                        "vehicle_model", "license_plate", "VIN", "owner") 
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        pool.query(queryText, [newVehicle.incident.id, newVehicle.vehicle_make, newVehicle.vehicle_year, 
            newVehicle.vehicle_model, newVehicle.license_plate, newVehicle.VIN, newVehicle.owner])
            .then((response) => {
                res.sendStatus(201);
                console.log(`error in post ${error}`);
            }).catch((error) => { next(error); })
    });

});

module.exports = router;