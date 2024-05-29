const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// POST route 

router.post('/', (req, res) => {
  console.log('in the POST server side. req.body is', req.body.flockmateInput);
  console.log('in the POST server side. req.user.id is', req.user.id);

  const shared_with_user_id = req.body.flockmateInput
  const user_id = req.user.id

    const sqlQuery = `
    INSERT INTO "shared_flights"
    (shared_with_user_id, user_id)
    VALUES
    ($1, $2)
    RETURNING "id";
    `
    pool.query(sqlQuery, [shared_with_user_id, user_id])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('Error in POST route for /addtoflock', err);
        res.sendStatus(500)
    })
});

module.exports = router;






