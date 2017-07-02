const express = require('express');
const bodyParser = require('body-parser');
const OAuth = require('oauth');
const dotenv = require('dotenv').config();

const index = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/tweets', index);

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.API_KEY,
    process.env.API_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

app.locals.oauth = oauth;

app.listen(3000);
