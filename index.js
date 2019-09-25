require('dotenv').config()
const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express()
app.use(cors({credentials: true}))
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.post('/quizzes', require('./controllers/postQuiz'))

app.listen(process.env.PORT, () => {
	console.log('Ready on port 4000')
})
