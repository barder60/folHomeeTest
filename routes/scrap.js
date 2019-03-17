/**
 * Require express and request lib
 */
var request = require("request");
var express = require('express');

/**
 * Create a router
 * @type {Router|router}
 */
var router = express.Router();

/**
 * Do a GET in the router for scrapRouter in app.js
 * request to https://www.folhomee.fr
 * and render the body in twig at scrap.twig
 */
router.get('/', function(req, res, next) {
  request('https://www.folhomee.fr/',
    function (error, response, body) {
      res.render('scrap',{ data: body});
    });
});

/**
 * Export the router for app.js
 */
module.exports = router;
