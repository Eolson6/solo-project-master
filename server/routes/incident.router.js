const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM incident WHERE "person_id" = $1; `;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            console.log('in image get incident', result);
            res.send(result.rows);
        })
});

router.get('/id', (req, res) => {
    const queryText = `SELECT MAX(id) AS id FROM incident `;
    pool.query(queryText)
        .then((result) => {
            console.log('in get', result);
            res.send(result.rows);
        })
});


router.post('/', (req, res) => {
    const newIncident = req.body;
    console.log('in newIncident Post', newIncident);
    
    const queryText = `INSERT INTO incident("location_type", "incident_type", "time", "date", "notes", "street", "city", "state", "person.id")) 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    pool.query(queryText, [newIncident.location_type, new newIncident.time,
    newIncident.date, newIncident.notes, newIncident.street, newIncident.city, newIncident.state, req.user.id])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error in incident post', error);
            res.sendStatus(500)})
});

router.delete('/:id', (req, res) => {
    const id = [req.params.id];
    console.log('in delete image incident', id);

    const queryText = `DELETE FROM "incident"
                    WHERE id= $1`;
    pool.query(queryText, id)
        .then((response) => { res.sendStatus(200); })
        .catch((error) => {
            console.log('error in delete incident', error);
            res.sendStatus(500);
        });

});

module.exports = router;