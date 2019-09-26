const Game = require('../models/game')

module.exports = (req, res) => {
	Game.findOne({_id: req.params.id})
	.populate('tags')
	.then(game => res.send(game))
	.catch(error => res.send(error))
}
