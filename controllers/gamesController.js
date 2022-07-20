const db = require('../models');

const index = (req, res) => {
  db.Game.find({}, (err, foundGames) => {
    if (err) console.log("Error in games#index:", err)
    if (!foundGames) return res.json({
      message: "No Games found in database."
    });
    res.status(200).json({games: foundGames})
  });
};

const show = (req, res) => {
  console.log("Backend" + req.params.id)
  db.Game.findById(req.params.id, (err, foundGame) => {
    if (err) console.log('Error in games#show:', err);
    if (!foundGame) return res.json({
      message: "Game not found in database"
    });
    res.status(200).json({game: foundGame});
  });
};

const create = (req, res) => {
  db.Game.create(req.body, (err, savedGame) => {
    if (err) console.log('Error in games#create:', err);
    res.status(201).json({game: savedGame});
  });
};

const update = (req, res) => {
  db.Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
    if (err) console.log('Error in games#update:', err)
    res.status(200).json({game: updatedGame});
  });
};

const destroy = (req, res) => {
  db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    if (err) console.log('Error in games#destroy:', err)
    res.status(200).json({game: deletedGame})
  });
};


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};