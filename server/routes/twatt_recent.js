var express = require('express')
var router = express.Router();
var appTwitter = require('../controller/twatt_recent_controller')

router.post('/recent' , appTwitter.twitterRecent )
router.post('/search' , appTwitter.twitterSearch )


module.exports = router;
