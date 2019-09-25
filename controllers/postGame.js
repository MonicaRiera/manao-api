const Game = require('../models/game')

module.exports = (req, res) => {
    console.log(req.body)
    
    Game.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => { console.log(err) })
}

