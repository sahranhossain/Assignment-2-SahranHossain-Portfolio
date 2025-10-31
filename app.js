// MAIN SERVER FILE (app.js) //
// This files controls how Express app works and connects all the routes and pages

// Import required Node.js modules

// Handles 404 errors and other errors
var createError = require('http-errors');

// Framework for making the website
var express = require('express');

// Helps work with files and folder paths
var path = require('path');

// Allows Express to read cookies
var cookieParser = require('cookie-parser');

// Logs requests to the console for debugging
var logger = require('morgan');

//Import route files

// Takes care of main website pages
var indexRouter = require('./routes/index');

// The default example route 
var usersRouter = require('./routes/users');

// Creates the Express app instance
var app = express();

// View engine setup

// Tells Express where all the EJS templates are located
app.set('views', path.join(__dirname, 'views'));

// Sets the EJS as the view engine for HTML pages
app.set('view engine', 'ejs');

// Middleware + Routes

// Logs all requests made for the website
app.use(logger('dev'));

// Allows the app to read JSON data
app.use(express.json());

// Allows the form submissions to be read
app.use(express.urlencoded({ extended: false }));

//Allows the app to use cookies for sessions
app.use(cookieParser());

//Allows the app to access files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Uses the index router for all main pages
app.use('/', indexRouter);

// app.use('/users', usersRouter);

//Error Handling

// Catch 404 errors and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler that handles all errors in one place
app.use(function(err, req, res, next) {

  // Shows error message
  res.locals.message = err.message;

  // Shows error details only in development mode
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Sends the error status like 404 or 500 and renders the error page
  res.status(err.status || 500);
  res.render('error');
});

//Export the app so bin/www can start the server
module.exports = app;
