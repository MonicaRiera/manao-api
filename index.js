require('dotenv').config()
const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express()
app.use(cors({credentials: true}))
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.post('/quizzes', require('./controllers/postQuiz'))
app.post('/games', require('./controllers/postGame'))
app.get('/games', require('./controllers/getGames'))
app.get('/games/:id', require('./controllers/getGame'))
app.get('/games/:id/quizzes', require('./controllers/getGameQuizzes'))
app.post('/history', require('./controllers/postHistory'))


app.post('/users', require('./controllers/postUser'))
app.get('/users/:id', require('./controllers/getUser'))

app.post('/tags', require('./controllers/postTag'))

app.listen(process.env.PORT, () => {
	console.log('Ready on port 4000')
})
