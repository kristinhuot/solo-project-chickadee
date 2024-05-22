const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();


router.put('/', (req, res) => {
  // console.log('req.user.id is', req.user.id);
  // console.log('req.body is', req.body);
  const name = req.body.name; 
  const pronouns = req.body.pronouns;
  const location = req.body.location; 
  const photo = req.body.photo
  const userID = req.user.id

  const queryText = `
    UPDATE "user"
    SET name = $1, pronouns = $2, location = $3, photo_URL = $4
    WHERE id = $5;
  `
  pool.query(queryText, [name, pronouns, location, photo, userID])
    .then(()=> {
      res.sendStatus(200);
    })
      .catch((err) => {
        console.log('Error updating user nest details', err);
        res.sendStatus(500); 
      })
})



// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const sharecode = req.body.sharecode;

  const queryText = `INSERT INTO "user" (username, password, share_code)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, sharecode])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout(function(err) {
    if (err) { return next(err); }
    return res.redirect('/');
    res.sendStatus(200);
  });
  
});

module.exports = router;
