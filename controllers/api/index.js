const router = require('express').Router();
const userRoutes = require('./userroutes');
const subscriptionRoute = require('./subscriptionroutes');

router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoute);

module.exports = router;
