const User = require('./user');
const Inputs = require('./input');
const Subscriptions = require('./subscription');
const Trials = require('./free_trial');
const Payments = require('./one_payment');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Inputs, Subscriptions, Trials, Payments };