const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



 //POST new care method 

 router.post('/', (req, res) => {

    console.log('this is the care method', req.body.value);
    console.log('this is the user id', req.user.id);

    // const careMethod = req.body.value
    // const userID = req.user.id

    
    //     const sqlQuery = `
    //         INSERT INTO "flights"
    //         (flight_title, flight_details, flight_date, user_id)
    //         VALUES
    //         ($1, $2, $3, $4)
    //         RETURNING "id";
    //         `
    //   pool.query(sqlQuery, [flightTitle, flightDetails, formattedDate, userID])
    //     .then((result) => {
    //         res.sendStatus(201)
    //     })
    //     .catch((err) => {
    //         console.log('Error in POST route for /flights', err);
    //         res.sendStatus(500)
    //     })
    });


// DELETE care method 

router.delete('/', (req, res) => {
  
  });
  


// GET all care methods 

//  router.get('/', (req, res) => {
//     // GET route code here
//   });






module.exports = router;