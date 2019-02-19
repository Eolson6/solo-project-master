const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/api/incident/id', (req, res) => {
//     const queryText = `SELECT * FROM incident WHERE "person_id" = $1; `;
//     pool.query(queryText, [req.user.id])
//         .then((result) => {
//             console.log('in image get incident', result);
//             res.send(result.rows);
//         })
// });

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM incident `;
    pool.query(queryText)
        .then((result) => {
            console.log('in get', result);
            res.send(result.rows);
        })
});


router.post('/', (req, res) => {
    const newIncident = req.body;
    console.log('in newIncident Post', newIncident);
    
    const queryText = `INSERT INTO incident("incident_type", "location_type", "time", "date", "notes", "street", "city", "state", "zip_code","person_id") 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
    pool.query(queryText, [newIncident.location_type, newIncident.incident_type, newIncident.time,
    newIncident.date, newIncident.notes, newIncident.street, newIncident.city, newIncident.state, newIncident.zip_code, req.user.id])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error in incident post', error);
            res.sendStatus(500)})
});

router.put('/id', (req,res)=> {
    console.log('in put incident', req.params.id);
    if(req.isAuthenticated()){
        const queryText =`UPDATE "incident" SET "incident_type" =$1, "location_type"=$2, "time"=$3, 
        "date"=$4, "notes"=$5, "street"=$6, "city"=$7, "state"=$8, "zip_code"=$9 WHERE "id" =$10; `;
        pool.query(queryText, [req.body.incident_type, 
                                req.body.location_type,
                                req.body.time,
                                req.body.date,
                                req.body.notes,
                                req.body.stret,
                                req.body.city,
                                req.body.state,
                                req.body.zip_code,
                                req.body.id])
        .then(()=>{
            console.log('incident put');
            res.sendStatus(201);
        }).catch((error)=>{

    })
    
}
})

// router.delete('/:id', (req, res) => {
//     const id = [req.params.id];
//     console.log('in delete image incident', id);

//     const queryText = `DELETE FROM "incident"
//                     WHERE id= $1`;
//     pool.query(queryText, id)
//         .then((response) => { res.sendStatus(200); })
//         .catch((error) => {
//             console.log('error in delete incident', error);
//             res.sendStatus(500);
//         });

// });

module.exports = router;