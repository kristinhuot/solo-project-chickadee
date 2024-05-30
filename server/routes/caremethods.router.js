const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();





// GET all selected care methods 

  router.get('/care_methods', (req, res) => {

    const user_id = req.user.id
    
        const query = `
            SELECT * FROM "care_methods"
            WHERE user_id = $1; 
        `
        pool.query(query, [user_id])
            .then(result => {
                res.send(result.rows)
            })
            .catch(err => {
                console.log('Error in GET /care_methods', err);
                res.sendStatus(500)
            })
    });



 //POST new care method 

 router.post('/', (req, res) => {
    const userId = req.user.id
    const time_together = false 
    const tell_me_nice_things = false
    const do_nice_things_for_me = false
    const hugs_please = false
    const surprises = false

        const sqlQuery = `
            INSERT INTO "care_methods"
            (user_id, time_together, tell_me_nice_things, do_nice_things_for_me, hugs_please, surprises)
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING "id";
            `
        const sqlValues = [userId, time_together, tell_me_nice_things, do_nice_things_for_me, hugs_please, surprises]

      pool.query(sqlQuery, sqlValues)
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in POST route for /api/caremethods', err);
            res.sendStatus(500)
        })
    });


// DELETE care method 

// router.delete(`/:method_id`, (req, res) => {

//     const user_id = req.user.id 
//     const method_id = req.params.method_id
  
//   const sqlQuery = `
//         DELETE FROM "care_methods"
//         WHERE "method_id" = $1 AND "user_id" = $2; 
//     `
//     pool.query(sqlQuery, [method_id, user_id])
//     .then((response) => {
//         res.sendStatus(200)
//     })
//     .catch((error) => {
//         console.log('Error in DELETE /caremethod', error);
//         res.sendStatus(500)
//     })

//   });
  









module.exports = router;