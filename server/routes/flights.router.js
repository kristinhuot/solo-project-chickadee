const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all flights 
router.get('/', (req, res) => {
console.log('req.user.id is', req.user.id)

const userID= req.user.id

    const query = `
    SELECT 
	flights.id AS "flight_id",
	flights.user_id,
	flights.flight_title,
	flights.flight_date,
	flights.flight_details,
	shared_flights.id AS "shared_id",
	shared_flights.shared_with_user_id AS "share_code",
	shared_flights.user_id,
	"user"."id" AS "user_id",
	"user"."name",
	"user"."pronouns",
	"user"."birthday"
FROM "flights"
		JOIN "shared_flights"
	ON flights.user_id = shared_flights.user_id
		JOIN "user" 	
	ON shared_flights.user_id = "user"."id"
	WHERE "shared_flights".user_id = $1
            ORDER BY "flight_date" DESC
    `
    pool.query(query, [userID])
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
            console.log('Error in GET /mine', err);
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
    
    const flightID = req.params.flight_id;

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