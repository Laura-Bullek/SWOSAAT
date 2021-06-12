const User = require('./user');
const Subscriptions = require('./subscription');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

User.hasMany(Subscriptions, {
    foreignKey: 'user_id',
})

module.exports = { User, Inputs, Subscriptions, Payments };