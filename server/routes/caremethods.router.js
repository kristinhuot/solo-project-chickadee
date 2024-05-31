const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();


// GET all selected care methods 

  router.get('/', (req, res) => {

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
    const time_together = req.body.time_together 
    const tell_me_nice_things = req.body.tell_me_nice_things
    const do_nice_things_for_me = req.body.do_nice_things_for_me
    const hugs_please = req.body.hugs_please
    const surprises = req.body.surprises

        const sqlQuery = `
            INSERT INTO "care_methods"
            (user_id, time_together, tell_me_nice_things, do_nice_things_for_me, hugs_please, surprises)
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING id, time_together, tell_me_nice_things, do_nice_things_for_me, hugs_please, surprises ;
            `
        const sqlValues = [userId, time_together, tell_me_nice_things, do_nice_things_for_me, hugs_please, surprises]

      pool.query(sqlQuery, sqlValues)
        .then((result) => {
            console.log('this is the DB result', result.rows[0]);
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in POST route for /api/caremethods', err);
            res.sendStatus(500)
        })
    });

// PUT route to edit care method

router.put('/', (req, res) => {

        const userId= req.user.id
        const careMethod = req.body.method
        console.log('req.body is:', req.body.method);

        switch (careMethod){
            case "time_together":
                console.log('care method is', careMethod);
                const sqlQuery = `
                UPDATE "care_methods"
                SET time_together = NOT time_together
                WHERE user_id = $1
        `
                pool.query(sqlQuery, [userId])
                .then(() => {
                    res.sendStatus(200)
                })
                .catch((err) => {
                    console.log('Error in PUT', err);
                    sendStatus(500)
                })
                break;
            case "tell_me_nice_things":
                const sqlQueryTwo = `
                UPDATE "care_methods"
                SET tell_me_nice_things = NOT tell_me_nice_things
                WHERE user_id = $1
        `
                pool.query(sqlQueryTwo, [userId])
                .then(() => {
                    res.sendStatus(200)
                })
                .catch((err) => {
                    console.log('Error in PUT', err);
                    sendStatus(500)
                })
                break; 
            case "send_me_nice_things":
                const sqlQueryThree = `
                UPDATE "care_methods"
                SET send_me_nice_things = NOT send_me_nice_things
                WHERE user_id = $1
        `
                pool.query(sqlQueryThree, [userId])
                .then(() => {
                    res.sendStatus(200)
                })
                .catch((err) => {
                    console.log('Error in PUT', err);
                    sendStatus(500)
                })
                break; 
            case "do_nice_things_for_me":
                const sqlQueryFour = `
                UPDATE "care_methods"
                SET do_nice_things_for_me = NOT do_nice_things_for_me
                WHERE user_id = $1
            `
                pool.query(sqlQueryFour, [userId])
                .then(() => {
                    res.sendStatus(200)
                })
                .catch((err) => {
                    console.log('Error in PUT', err);
                    sendStatus(500)
                })
                break; 
            case "hugs_please":
                const sqlQueryFive = `
                UPDATE "care_methods"
                SET hugs_please = NOT hugs_please
                WHERE user_id = $1
            `
                pool.query(sqlQueryFive, [userId])
                .then(() => {
                    res.sendStatus(200)
                })
                .catch((err) => {
                    console.log('Error in PUT', err);
                    sendStatus(500)
                })
                break; 
            case "hugs_please":
                const sqlQuerySix = `
                UPDATE "care_methods"
                SET hugs_please = NOT hugs_please
                WHERE user_id = $1
            `
                pool.query(sqlQuerySix, [userId])
                .then(() => {
                    res.sendStatus(200)
                })
                .catch((err) => {
                    console.log('Error in PUT', err);
                    sendStatus(500)
                })
                break;
        } 
    
})




module.exports = router;