const router = require('express').Router();
const userRoutes = require('./userRoutes');
const subscriptionRoute = require('./subscriptionRoutes');

router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoute);

module.exports = router;
