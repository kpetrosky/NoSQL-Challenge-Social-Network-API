const { reaction, friend } = require('../models');

module.exports = {
  // Get all reactions
  getreactions(req, res) {
    reaction.find()
      .then((reactions) => res.json(reactions))
      .catch((err) => res.status(500).json(err));
  },
  // Get a reaction
  getSinglereaction(req, res) {
    reaction.findOne({ _id: req.params.reactionId })
      .select('-__v')
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a reaction
  createreaction(req, res) {
    reaction.create(req.body)
      .then((reaction) => res.json(reaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a reaction
  deletereaction(req, res) {
    reaction.findOneAndDelete({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : friend.deleteMany({ _id: { $in: reaction.friends } })
      )
      .then(() => res.json({ message: 'reaction and friends deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a reaction
  updatereaction(req, res) {
    reaction.findOneAndUpdate(
      { _id: req.params.reactionId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with this id!' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};
