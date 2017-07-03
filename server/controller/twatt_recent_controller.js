var express = require('express');
 var OAuth = require('oauth');
 require('dotenv').config()

 var twitterRecent = (req,res,next) =>{
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
         'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=AmboDalle001&count=3',
         process.env.USER_ACCEES_TOKEN, //test user token //Access Token
         process.env.USER_SECRET_TOKEN, //test user secret //Access Token Secret
         function (err, data){
           if (err) console.error(err);
           console.log(require('util').inspect(data));
           res.send(JSON.parse(data));
         });
}

var twitterSearch = (req,res,next) =>{
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
        'https://api.twitter.com/1.1/search/tweets.json?q= ' + req.body.search,
        process.env.USER_ACCEES_TOKEN, //test user token //Access Token
        process.env.USER_SECRET_TOKEN, //test user secret //Access Token Secret
        function (err, data){
          if (err) console.error(err);
          console.log(require('util').inspect(data));
          res.send(JSON.parse(data));
        });
}

module.exports = {
     twitterRecent,
     twitterSearch
}
