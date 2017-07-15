'use strict'

const OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.APPLICATION_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    
var search =(req,res)=>{
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.twitSearch}`,
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret             
    function (e, data){
      if (e) console.log(e);
      console.log(JSON.parse(data));
      res.send(JSON.parse(data));
    });
}


var timeline = (req,res) =>{
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret             
    function (e, data){ 
      if (e) console.error(e); 
      // console.log(data);       
      res.send(JSON.parse(data));
    });
}

var twitPost = (req,res)=>{
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${req.params.twitPost}`,
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret  
    req.params.twitPost,
    "txt",
    function (e, data){ 
      if (e) console.error(e); 
      console.log(data);       
      res.send(data);
    });
}



module.exports ={
  search,
  timeline,
  twitPost
}
