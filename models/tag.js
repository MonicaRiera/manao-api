const mongoose = require('mongoose')

const Tag = mongoose.model('tag', {
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    icon: {
        type: String,
        required: [true, 'Icon is required']
    }
})

module.exports = Tag