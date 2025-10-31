//USER ROUTE FILE - user.js //
//This is a default route file made by Express.
//Can be used later for user accounts and authentication.

//Import Express
var express = require('express');
var router = express.Router();

/* GET users listing. */
// When someone goes to '/users', this sends a plain text message saying "respond with a resource"
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Exports the router so it can be used in app.s
module.exports = router;
