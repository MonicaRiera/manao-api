const mongoose = require('mongoose')

const Quiz = mongoose.model('quiz', {
	location: {
		lat: {
			type: Number,
			required: [true, 'Please provide latitude']
		},
		lng: {
			type: Number,
			required: [true, 'Please provide longitude']
		}
	},
	locationName: {
		type: String,
		required: [true, 'Please provide location']
	},
	question: {
		content: {
			type: String,
			required: [true, 'Please provide question']
		},
		type: {
			type: String,
			required: [true, 'Please provide type of question']
		}
	},
	answer: {
		content: {
			type: String,
			required: [true, 'Please provide answer']
		},
		type: {
			type: String,
			required: [true, 'Please provide type of answer']
		}
	},
	indication: {
		type: String,
		required: [true, 'Please provide an indication to the next location']
	},
	placeDescription: {
		type: String,
		required: [true, 'Please provide description of the place']
	},
	score: {
		type: Number,
		default: 20
	},
	hint: {
		content: {
			type: String,
			required: [true, 'Please provide hint']
		},
		type: {
			type: String,
			required: [true, 'Please provide type of hint']
		}
	},
	images: [{
		type: String
	}]
})

module.exports = Quiz
