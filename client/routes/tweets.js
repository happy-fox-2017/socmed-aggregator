const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function getTweets(req, res, next) {
  var request = require('request');
  request('http://localhost:3000/api/tweets/timelines', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
});

router.get('/search', function getTweets(req, res, next) {
  const searchString = req.query.search;

  var request = require('request');
  request(`http://localhost:3000/api/tweets/search?keyword=${searchString}`, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
});

module.exports = router;
