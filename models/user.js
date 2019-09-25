const mongoose = require('mongoose')

const User = mongoose.model('user', {
    avatar: {
        type: String,
        default: "https://previews.123rf.com/images/viktarmalyshchyts/viktarmalyshchyts1201/viktarmalyshchyts120100320/12070256-lime-slice.jpg"
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    nationality: {
        type: String,
        required: [true, 'Nationality is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    }
})

module.exports = User