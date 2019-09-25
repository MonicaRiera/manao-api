require('dotenv').config()
const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express()
app.use(cors({credentials: true}))
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.use(cors({credentials: true}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.post('/quizzes', require('./controllers/postQuiz'))
app.post('/games', require('./controllers/postGame'))


app.post('/users', require('./controllers/postUser'))

app.listen(process.env.PORT, () => {
	console.log('Ready on port 4000')
})
