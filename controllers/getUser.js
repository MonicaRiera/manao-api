const User = require('../models/user')

module.exports = (req, res) => {

    User.findById(req.params.id)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}



