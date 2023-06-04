const router = require('express').Router();
const {
  getfriend,
  getSinglefriend,
  createfriend,
  updatefriend,
  deletefriend,
} = require('../../controllers/friendController.js');

// /api/friend
router.route('/').get(getfriend).post(createfriend);

// /api/friend/:friendId
router
  .route('/:friendId')
  .get(getSinglefriend)
  .put(updatefriend)
  .delete(deletefriend);

module.exports = router;