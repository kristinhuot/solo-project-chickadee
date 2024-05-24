const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all flights 
router.get('/', (req, res) => {
    const query = `
        SELECT * FROM "flights"
            ORDER BY "flight_date" DESC
    `
    pool.query(query)
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in GET /flights', err);
            res.sendStatus(500)
        })
});

// GET flights for a single logged in user

router.get('/mine', (req, res) => {

const user_id = req.user.id

    const query = `
        SELECT * FROM "flights"
        WHERE user_id = $1
            ORDER BY "flight_date" DESC; 
    `
    pool.query(query, [user_id])
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in GET /flights', err);
            res.sendStatus(500)
        })
});


// ADD a new flight 
router.post('/', (req, res) => {

const flightTitle = req.body.flightTitle
const flightDetails = req.body.flightDetails
const dateValue = req.body.flightDate
const userID = req.user.id
const formattedDate = new Date(dateValue).toISOString().split('T')[0]
  // converts flight date data into an object to parse correctly. Converts object into
  // an ISO string, splits the string on the 't' to separate the date and time. Take
  // the first part of the split array (date format portion)

    const sqlQuery = `
        INSERT INTO "flights"
        (flight_title, flight_details, flight_date, user_id)
        VALUES
        ($1, $2, $3, $4)
        RETURNING "id";
        `
  pool.query(sqlQuery, [flightTitle, flightDetails, formattedDate, userID])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('Error in POST route for /flights', err);
        res.sendStatus(500)
    })
});



// DELETE a flight 

router.delete(`/:flight_id`, (req, res) => {
    
    const flightID = req.user.id

    const sqlQuery = `
        DELETE FROM flights
            WHERE id = $1;
    ` 
    pool.query(sqlQuery, [flightID])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('Error in DELETE route for /flights', err);
        res.sendStatus(500)
    })
})

// EDIT a flight 





module.exports = router;