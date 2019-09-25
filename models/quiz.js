const mongoose = require('mongoose')

const Quiz = mongoose.model('quiz', {
	location: {
		type: String,
		required: [true, 'Please provide location']
	},
	question: {
		content: String,
		type: String,
		required: [true, 'Please provide question']
	},
	answer: {
		content: String,
		type: String,
		required: [true, 'Please provide answer']
	},
	indication: {
		type: String,
		required: [true, 'Please provide an indication to the next location']
	},
	score: {
		type: Number,
		default: 20
	},
	hint: {
		content: String,
		type: String,
		required: [true, 'Please provide a hint']
	}
})

module.exports = Quiz
