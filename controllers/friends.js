const { Profile, friend } = require('../models');

module.exports = {
  // Get all profiles
  getprofiles(req, res) {
    profile.find()
      .then((profiles) => res.json(profiles))
      .catch((err) => res.status(500).json(err));
  },
  // Get a profile
  getSingleprofile(req, res) {
    profile.findOne({ _id: req.params.profileId })
      .select('-__v')
      .then((profile) =>
        !profile
          ? res.status(404).json({ message: 'No profile with that ID' })
          : res.json(profile)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a profile
  createprofile(req, res) {
    profile.create(req.body)
      .then((profile) => res.json(profile))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a profile
  deleteprofile(req, res) {
    profile.findOneAndDelete({ _id: req.params.profileId })
      .then((profile) =>
        !profile
          ? res.status(404).json({ message: 'No profile with that ID' })
          : friend.deleteMany({ _id: { $in: profile.friends } })
      )
      .then(() => res.json({ message: 'profile and friends deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a profile
  updateprofile(req, res) {
    profile.findOneAndUpdate(
      { _id: req.params.profileId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((profile) =>
        !profile
          ? res.status(404).json({ message: 'No profile with this id!' })
          : res.json(profile)
      )
      .catch((err) => res.status(500).json(err));
  },
};
