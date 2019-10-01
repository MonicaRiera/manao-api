const Tag = require('../models/tag')

module.exports = (req, res) => {

    Tag.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => { console.log(err) })
}
