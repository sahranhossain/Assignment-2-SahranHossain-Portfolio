// ROUTES FILE - index.js // 
// This file chooses which EJS page to show when someone visits a specific URL.

//Import Express
var express = require('express');

//Create a router object to handle routes seperately from the main app
var router = express.Router();

//=======================//
//HOME PAGE ROUTE //
//=======================//

//When anyone visits '/home' show home.ejs

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home - My Portfolio' }); 
});

//=======================//
// ABOUT PAGE ROUTE //
//=======================//

//When anyone visits '/about' show about.ejs

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me - My Portfolio' });
});

//=======================//
// PROJECTS PAGE ROUTE //
//=======================//

//When anyone visits '/projects' show projects.ejs

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects - My Portfolio' });
});

//=======================//
// CONTACT PAGE ROUTE
//=======================//

//When anyone visits '/contact' show contact.ejs

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me - My Portfolio'});
});

// Export the router to make it able to be used in app.js
module.exports = router;

