const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtRoutes');


router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);
router.use('/friend', friendRoutes);



module.exports = router;
