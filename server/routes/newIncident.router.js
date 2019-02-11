const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
pool.query(`SELECT * FROM  "incident"`)
.then(results => res.send(results.rows))
.catch(error => {
    res.sendStatus(500);
});
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const newIncident = req.body;
    const queryText = `INSERT INTO incident( "location", "type", "time", "date", "notes") 
                        VALUES ($1, $2, $3, $4, $5)`;
            pool.query(queryText, [newIncident.location, newIncident.type, newIncident.time, 
                                    newIncident.date, newIncident.notes])
                        .then((response)=> {
                            res.sendStatus(201);
                            console.log(`error in post ${error}`);
                        }).catch((error)=> {next(error); })
});

module.exports = router;