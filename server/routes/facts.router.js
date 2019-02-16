const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM facts; `;
    pool.query(queryText)
        .then((result) => {
            console.log('in image get facts', result);
            res.send(result.rows);
        })
});

router.post('/', (req, res) => {
    const newFacts = req.body;
    console.log('in facts post', newFacts);
    
    const queryText = `INSERT INTO facts( "location", "type", "time", "date", "notes") 
                        VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [newFacts.location, newFacts.type, newFacts.time,
    newFacts.date, newFacts.notes])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error in fact post', error);
            res.sendStatus(500)})
});

router.delete('/:id', (req, res) => {
    const id = [req.params.id];
    console.log('in delete image facts', id);

    const queryText = `DELETE FROM "facts"
                    WHERE id= $1`;
    pool.query(queryText, id)
        .then((response) => { res.sendStatus(200); })
        .catch((error) => {
            console.log('error in delete facts', error);
            res.sendStatus(500);
        });

});

module.exports = router;