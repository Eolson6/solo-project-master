const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM vehicle;`;
    pool.query(queryText)
    .then((result) => {
        console.log('in vehicle get router', result);
        
        res.send(result.rows);
    });

});

/**
 * POST route template
 */

 //query matches dtabse -- new vehicle matches client 
router.post('/', (req, res) => {
        const newVehicle = req.body;
        console.log('in vehicle post 1', newVehicle);
        const queryText = `INSERT INTO vehicle( "incident_id", "vehicle_make", "vehicle_year", 
                        "vehicle_model", "license_plate", "VIN", "owner", "notes", "insurance_company", "policy_number", "driver") 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
        pool.query(queryText, [newVehicle.incident_id, newVehicle.make, newVehicle.year, 
            newVehicle.model, newVehicle.license, newVehicle.vin, newVehicle.owner, newVehicle.notes, newVehicle.insurance_company,
            newVehicle.policy_number, newVehicle.driver])
            .then((response) => {
                res.sendStatus(201);
            }).catch((error) => {
                console.log(`error in vehicle post ${error}`);
                res.sendStatus(500)
            });
});

router.delete('/:id', (req, res) => {
    const id = [req.params.id];
    console.log('in delete vehicle router', id);

    const queryText = `DELETE FROM "vehicle"
                    WHERE id= $1`;
    pool.query(queryText, id)
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('error in delete vehicle', error);
            res.sendStatus(500);
        });

});



module.exports = router;