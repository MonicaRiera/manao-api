const Tag = require('../models/tag')

module.exports = (req, res) => {
    console.log(req.body)

    Tag.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => { console.log(err) })
}

