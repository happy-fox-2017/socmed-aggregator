var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
var twatt = require('../controllers/twatt_api')
/* GET home page. */

router.get('/', function(req, res) {
  res.send('alive')
})
router.post('/api/twitt', twatt.addTwitt)
router.get('/api/twitt/:search', twatt.searchTwitt)
router.get('/api/twitt/', twatt.timelineTwitt)


module.exports = router;
