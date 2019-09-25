const mongoose = require('mongoose')


let connection = 'mongodb+srv://Lydia:Manao123@manao-ngevb.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(connection, {useNewUrlParser:true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
