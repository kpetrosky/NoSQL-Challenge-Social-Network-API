const router = require('express').Router();
const courseRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/courses', courseRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
