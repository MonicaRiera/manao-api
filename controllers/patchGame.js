const Game = require('../models/game')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	Game.findOne({_id: req.params.id}).lean()
	.then(game => {
		game.ratings.push(req.body.rating)
		Game.findByIdAndUpdate(game._id, game, {new:true})
		.then(updatedGame => res.send(updatedGame))
	})
	.catch(error => res.send(error))
}
