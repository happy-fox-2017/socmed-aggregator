const express = require('express');

const router = express.Router();
require('dotenv').config();

router.get('/test', (req, res) => {
  req.app.locals.oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.TOKEN,
    process.env.TOKEN_SECRET,
    function (e, data, resp) {
      if (e) console.error(e);
      console.log(data);
      res.send(data);
    });
});

router.get('/timelines', function(req, res) {
  const url =  'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Yusuf_hacktiv8&count=2';
  req.app.locals.oauth.get(
    url,
    process.env.TOKEN,
    process.env.TOKEN_SECRET,
    function (e, data, resp) {
      if (e) console.error(e);
      console.log(data);
      res.send(data);
    });
});

router.get('/search', function(req, res) {
  const keyword = req.query.keyword ? req.query.keyword : '';
  const url =  `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}&count=1`;
  req.app.locals.oauth.get(
    url,
    process.env.TOKEN,
    process.env.TOKEN_SECRET,
    function (e, data, resp) {
      if (e) console.error(e);
      console.log(data);
      res.send(data);
    });
});

router.post('/addtweet', function(req, res) {
  const tweet = req.body.tweet;
  const url = `https://api.twitter.com/1.1/statuses/update.json?status=${tweet}`;
  req.app.locals.oauth.post(
    url,
    process.env.TOKEN,
    process.env.TOKEN_SECRET,
    '',
    'text/plain',
    function (e, data, resp) {
      if (e) console.error(e);
      console.log(data);
      res.send(data);
    });
});

module.exports = router;
