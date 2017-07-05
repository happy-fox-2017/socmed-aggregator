const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors = require('cors')


var appRecent = require('./routes/twatt_recent')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


app.use('/api', appRecent )

app.listen(3000, ()=>{
     console.log('on ');
})
