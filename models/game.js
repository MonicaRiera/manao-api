const mongoose = require('mongoose')

const Game = mongoose.model('game', {
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    image: {
        type: String,
        default: "../assets/manao.png"
    },
    intro: {
        type: String,
        required: [true, 'Intro is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is required']
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tag'
    }],
    location: {
        type: String,
        required: [true, 'Location is required']
    },
		startingPoint: {
			lat: {
				type: Number,
				required: [true, 'Please provide latitude']
			},
			lng: {
				type: Number,
				required: [true, 'Please provide longitude']
			}
		},
    quizzes: [{
			quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz'
			},
			order: {
				type: Number
			}
		}],
    creationDate: {
        type: String,
        default: Date.now()
    },
		ratings: {
			type: [Number],
			default: []
		},
		price: {
			type: Number,
			default: 0
		},
		distance: {
			type: Number,
			required: [true, 'Please provide average distance']
		}
})

module.exports = Game
