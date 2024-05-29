const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all flights 
router.get('/', (req, res) => {
console.log('req.user.id is', req.user.id)

const userID= req.user.id

    const query = `
    SELECT
	flights.id AS flight_id,
	flights.flight_title,
    flights.flight_details,
    flights.flight_date,
	flights.user_id AS flight_owner_id,
	shared_flights.id AS shared_flight_id,
    shared_flights.user_id, 
    shared_flights.followed_user_id,
	"user".name, 
    "user".pronouns, 
    "user".photo_url,
    "user".location
FROM shared_flights
	JOIN flights
	  ON shared_flights.followed_user_id = flights.user_id
	JOIN "user"
	  ON flights.user_id = "user".id  
WHERE shared_flights.user_id = $1
            ORDER BY "flight_date" DESC; 
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

// Updates user data after registering and completing the My Nest inputs
router.put(`/:id`, (req, res) => {

    console.log('in PUT route, req.body', req.body);
    const flightID = req.params.id; 
    const flightTitle = req.body.flight_title
    const flightDetails = req.body.flight_details
    const dateValue = req.body.flight_date
    const formattedDate = new Date(dateValue).toISOString().split('T')[0]
    // converts birthday data into an object to parse correctly. Converts object into
    // an ISO string, splits the string on the 't' to separate the date and time. Take
    // the first part of the split array (date format portion)
  
    const queryText = `
      UPDATE "flights"
      SET flight_title = $1, flight_details = $2, flight_date = $3
      WHERE id = $4;
    `
    pool.query(queryText, [flightTitle, flightDetails, formattedDate, flightID])
      .then(()=> {
        res.sendStatus(200);
      })
        .catch((err) => {
          console.log('Error updating flight', err);
          res.sendStatus(500); 
        })
  })
  


// GET the data for a single flight in order to view for editing 

router.get('/edit_flight/:id', (req, res) => {
    console.log('this is the GET for a single flight for editing');
    const idOfFlight = req.params.id

    const sqlText = `
        SELECT * FROM "flights"
            WHERE id = $1; 
    `
  
    pool.query(sqlText, [idOfFlight])
        .then((dbRes) => {
     
        const singleFlight = dbRes.rows[0]
        res.send(singleFlight); 
        })
        .catch((dbErr) => {
            console.log('GET /edit_flight/:idOfFlight error', dbErr);
            res.sendStatus(500)
        })
})



// GET flights for a single logged in user

router.get('/mine/', (req, res) => {
    console.log('this is the get for single user');
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


module.exports = router;