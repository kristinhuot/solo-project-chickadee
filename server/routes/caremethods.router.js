const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();



 //POST new care method 

 router.post('/', (req, res) => {
    const careMethod = req.body.value
    const userID = req.user.id
    const method_id = req.body.method_id
    
        const sqlQuery = `
            INSERT INTO "care_methods"
            (care_method_text, user_id, method_id)
            VALUES
            ($1, $2, $3)
            RETURNING "id";
            `
      pool.query(sqlQuery, [careMethod, userID, method_id])
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in POST route for /flights', err);
            res.sendStatus(500)
        })
    });


// DELETE care method 

router.delete(`/:method_id`, (req, res) => {
    
// console.log('user id is', req.user.id);
// console.log('method_id is', req.params.method_id);

    const user_id = req.user.id 
    const method_id = req.params.method_id
  
  const sqlQuery = `
        DELETE FROM "care_methods"
        WHERE "method_id" = $1 AND "user_id" = $2; 
    `
    pool.query(sqlQuery, [method_id, user_id])
    .then((response) => {
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log('Error in DELETE /caremethod', error);
        res.sendStatus(500)
    })

  });
  


// GET all care methods 

//  router.get('/', (req, res) => {
//     // GET route code here
//   });






module.exports = router;