require('dotenv').config()
const express = require('express')
const database = require('./database')
let app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


app.get('/', require('./controllers/root'))


app.post('/games', require('./controllers/postGame'))

app.listen(process.env.PORT, () => {
	console.log('Ready on port 4000')
})
