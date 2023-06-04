const router = require('express').Router();
const {
  getreactions,
  getSinglereaction,
  createreaction,
  updatereaction,
  deletereaction,
} = require('../../controllers/reactionController.js');

// /api/reactions
router.route('/').get(getreactions).post(createreaction);

// /api/reactions/:reactionId
router
  .route('/:reactionId')
  .get(getSinglereaction)
  .put(updatereaction)
  .delete(deletereaction);

module.exports = router;
