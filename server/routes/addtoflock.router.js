const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// POST route 

router.post('/', async (req, res) => {
    try{

        const shareCode = req.body.flockmateInput
        const user_id = req.user.id

        const sqlQuery = `
            SELECT * FROM "user" 
            WHERE share_code = $1;
        `
        const dbRes = await pool.query(sqlQuery, [shareCode]) 
        
        if (dbRes.rows.length === 0) { // if there is no matching share code in the DB, return not found 
            return res.sendStatus(404) 
        }
    
        const followed_user_id = dbRes.rows[0].id // grabs the id from the returned matching user 
        
        // the following code takes the response from the DB and creates a POST request with the 
        // returned followed user ID and user id from the request 
        const postQuery = ` 
            INSERT INTO "shared_flights"
            (user_id, followed_user_id)
            VALUES
            ($1, $2)
        `
        await pool.query(postQuery, [user_id, followed_user_id]); // if this request is successful, send a 201
        
        res.sendStatus(201)
        } catch(error){ // else if there's an error, send 500 code 
            console.log('Error in POST route for /addtoflock', error);
            res.sendStatus(500)
        }
}); 
    

module.exports = router;






