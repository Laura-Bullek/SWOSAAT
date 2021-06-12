const User = require('./user');
const Subscriptions = require('./subscription');

User.hasMany(Subscriptions, {
    foreignKey: 'user_id',
})

module.exports = { User, Subscriptions};