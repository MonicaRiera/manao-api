const User = require('../models/user')

module.exports = (req, res) => {
    console.log(req.body)

    User.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => { console.log(err) })
}

