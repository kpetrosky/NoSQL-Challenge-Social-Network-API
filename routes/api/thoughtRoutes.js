const router = require('express').Router();
const {
  getthoughts,
  getSinglethought,
  createthought,
  deletethought,
  addreaction,
  removereaction,
} = require('../../controllers/thought.js');

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSinglethought).delete(deletethought);

// /api/thoughts/:thoughtId/thought
router.route('/:thoughtId/reactions').post(addreaction);

// /api/thoughts/:thoughtId/thoughts/:thoughtId
router.route('/:thoughtId/reactions/:reactionId').delete(removereaction);

module.exports = router;
