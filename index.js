const express = require('express')
const database = require('./database')
let app = express()

app.get('/', require('./controllers/root'))

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
