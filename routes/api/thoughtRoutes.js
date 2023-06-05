const router = require('express').Router();
const {
  getthoughts,
  getSinglethought,
  createthought,
  deletethought,
  addthought,
  removethought,
} = require('../../controllers/thought.js');

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSinglethought).delete(deletethought);

// /api/thoughts/:thoughtId/thought
router.route('/:thoughtId/thoughts').post(addthought);

// /api/thoughts/:thoughtId/thoughts/:thoughtId
router.route('/:thoughtId/thought/:thoughtId').delete(removethought);

module.exports = router;
