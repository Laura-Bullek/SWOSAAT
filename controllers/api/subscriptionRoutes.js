const router = require("express").Router();
const { Subscription } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newSub = await Subscription.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSub);
  } catch (eer) {
    res.status(400).json(err);
  }
});

module.exports = router;
