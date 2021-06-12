const User = require("./user");
const Subscription = require("./subscription");

User.hasMany(Subscription, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Subscription.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Subscription };
