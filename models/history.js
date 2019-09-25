const mongoose = require('mongoose')

const History = mongoose.model('history', {
	players: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'user'
			},
			time: {
				type: Number,
				default: 0
			},
			score: {
				type: Number,
				default: 0
			}
		}
	],
	game: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'game',
		required: [true, 'No history without game']
	},
	date: {
		type: Date,
		default: Date.now()
	}

})

module.exports = History
