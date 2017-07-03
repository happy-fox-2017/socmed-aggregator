const express = require('express');
const router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function getTweets(req, res, next) {
  request('http://localhost:3000/api/tweets/timelines', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
});

router.get('/search', function getTweets(req, res, next) {
  const searchString = req.query.search;
  request(`http://localhost:3000/api/tweets/search?keyword=${searchString}`, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
});

router.post('/addtweet', (req, res, next) => {
  const tweet = req.body.tweet;
  request.post({
    url: 'http://localhost:3000/api/tweets/addtweet',
    form: { tweet },
  }, (err, httpResponse, body) => {
    res.send(body);
  });
});

module.exports = router;
