const mongoose = require('mongoose')

const Game = mongoose.model('game', {
    title: {
        type: String,
        default: "https://randomuser.me/api/portraits/lego/1.jpg",
        required: [true, 'title is required']
    },
    image: {
        type: String,
        default: "https://randomuser.me/api/portraits/lego/1.jpg"
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
        required: [true, 'duration is required']
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tag'
    }],
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    quizzes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz'
    }],
    creationDate: {
        type: String,
        default: Date.now()
    }
})

module.exports = Game

