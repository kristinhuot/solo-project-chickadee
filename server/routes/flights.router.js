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


// ADD a new flight 
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

// DELETE a flight 



// EDIT a flight 