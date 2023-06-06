const { Thought, User } = require('../models');

module.exports = {
  getuser(req, res) {
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  getSingleuser(req, res) {
    User.findById(req.params.userId)
    .populate('thoughts')
    .populate('friends')
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  },
  createuser (req, res) {
    User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  },
  updateuser(req,res) {
    User.findOneAndUpdate({ _id: req.params.userId }, {$set:req.body}, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  },
  deleteuser(req,res){
    User.findOneAndDelete({ _id: req.params.userId })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
  },
}


