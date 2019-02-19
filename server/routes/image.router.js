const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
//  * GET route template
//  */
// router.get('/', (req, res) => {
// const queryText = `SELECT * FROM image; `;
// pool.query(queryText)
// .then((result)=>{
//     console.log('in image get router', result);
//     res.send(result.rows);
// })
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {
const newImage = req.body;
console.log('in image post', newImage);
const queryText = `INSERT INTO image("incident_id", "image_path", "image_description")
                    VALUES ($1, $2, $3)`;
    pool.query(queryText, [newImage.incident_id, newImage.image_path, newImage.image_description])
.then((respopnse)=>{
    res.sendStatus(201);
}).catch((error)=>{
    console.log('error in image post', error);
    res.sendStatus(500)
    
})
});

router.delete('/:id', (req, res) => {
    const id = [req.params.id];
    console.log('in delete image router', id);

    const queryText = `DELETE FROM "image"
                    WHERE id= $1`;
    pool.query(queryText, id)
        .then((response) => { res.sendStatus(200); })
        .catch((error) => {
            console.log('error in delete image', error);
            res.sendStatus(500);
        });

});


module.exports = router;