require('dotenv').config()
const express = require('express')
const database = require('./database')
let app = express()

app.get('/', require('./controllers/root'))

app.listen(process.env.PORT, () => {
	console.log('Ready on port 4000')
})
