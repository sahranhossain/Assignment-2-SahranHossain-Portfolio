// ROUTES FILE - index.js // 

//Import Express
var express = require('express');

//Create a router object
var router = express.Router();

//=======================//
//HOME PAGE ROUTE //
//=======================//

//When anyone visits '/' show home.ejs

router.get('/', function(req, res, next) {
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

// Export the router to be used in app.js
module.exports = router;

