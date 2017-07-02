var OAuth = require('oauth');
require('dotenv').config()


var addTwitt = function(req,res){
  console.log(req.body);
  var oauth = new OAuth.OAuth(
       'https://api.twitter.com/oauth/request_token',
       'https://api.twitter.com/oauth/access_token',
       process.env.API_KEY, //Consumer Key (API Key)
       process.env.API_SECRET, //Consumer Secret (API Secret)
       '1.0A',
       null,
       'HMAC-SHA1'
     );
     oauth.post(
     'https://api.twitter.com/1.1/statuses/update.json?status=' + req.body.twitt,
     process.env.USER_ACCESS_TOKEN, //test user token //Access Token
     process.env.USER_SECRET_TOKEN, //test user secret //Access Token Secret
     req.body.twitt,
     "twitt",
     function (err, data){
       if (err) console.error(err);
      //  console.log(require('util').inspect(data.text));
       res.send(JSON.parse(data));
     });
}

var searchTwitt = function(req, res) {
  console.log(req.body);
  var oauth = new OAuth.OAuth(
       'https://api.twitter.com/oauth/request_token',
       'https://api.twitter.com/oauth/access_token',
       process.env.API_KEY, //Consumer Key (API Key)
       process.env.API_SECRET, //Consumer Secret (API Secret)
       '1.0A',
       null,
       'HMAC-SHA1'
     );
     oauth.get(
     'https://api.twitter.com/1.1/search/tweets.json?q='+ req.params.search,
     process.env.USER_ACCESS_TOKEN, //test user token //Access Token
     process.env.USER_SECRET_TOKEN, //test user secret //Access Token Secret
     function (err, data){
       if (err) console.error(err);
      //  console.log(require('util').inspect(data));
       res.send(JSON.parse(data));
     });
}

var timelineTwitt = function(req, res) {
  console.log(req.body);
  var oauth = new OAuth.OAuth(
       'https://api.twitter.com/oauth/request_token',
       'https://api.twitter.com/oauth/access_token',
       process.env.API_KEY, //Consumer Key (API Key)
       process.env.API_SECRET, //Consumer Secret (API Secret)
       '1.0A',
       null,
       'HMAC-SHA1'
     );
     oauth.get(
     'https://api.twitter.com/1.1/statuses/user_timeline.json',
     process.env.USER_ACCESS_TOKEN, //test user token //Access Token
     process.env.USER_SECRET_TOKEN, //test user secret //Access Token Secret
     function (err, data){
       if (err) console.error(err);
      //  console.log(require('util').inspect(data));
       res.send(JSON.parse(data));
     });
}

module.exports = {
  addTwitt,
  searchTwitt,
  timelineTwitt
}
