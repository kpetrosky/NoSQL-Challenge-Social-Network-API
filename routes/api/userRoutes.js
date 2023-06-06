const router = require('express').Router();
const {
  getuser,
  getSingleuser,
  createuser,
  updateuser,
  deleteuser,
} = require('../../controllers/user.js');

// // /api/user
router.route('/').get(getuser).post(createuser);

// // /api/user/:userId
router
  .route('/:userId')
  .get(getSingleuser)
  .put(updateuser)
  .delete(deleteuser);



module.exports = router;