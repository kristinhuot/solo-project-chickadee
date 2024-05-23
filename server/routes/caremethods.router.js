const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



 //POST new care method 

 router.post('/', (req, res) => {

    const careMethod = req.body.value
    const userID = req.user.id
    
        const sqlQuery = `
            INSERT INTO "care_methods"
            (care_method_text, user_id)
            VALUES
            ($1, $2)
            RETURNING "id";
            `
      pool.query(sqlQuery, [careMethod, userID])
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in POST route for /flights', err);
            res.sendStatus(500)
        })
    });


// DELETE care method 

router.delete('/', (req, res) => {
  
  });
  


// GET all care methods 

//  router.get('/', (req, res) => {
//     // GET route code here
//   });






module.exports = router;