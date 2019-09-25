const mongoose = require('mongoose')


let connection = `mongodb+srv://${process.env.MONGODBATLAS_USER_NAME}:${process.env.MONGODBATLAS_USER_PASSWORD}@manao-ngevb.mongodb.net/test?retryWrites=true&w=majority`


mongoose.connect(connection, {useNewUrlParser:true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
