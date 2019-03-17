/**
 * require express lib
 */

var express = require('express');

/**
 * Create a router
 * @type {Router|router}
 */
var router = express.Router();

/**
 * Do a GET in the router for indexRouter in app.js
 */
router.get('/', function(req, res, next) {
  res.render('index');
});

/**
 * Export the router for app.js
 */
module.exports = router;
