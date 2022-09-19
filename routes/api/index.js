const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/courses', courseRoutes);
router.use('/students', thoughtRoutes);

module.exports = router;
