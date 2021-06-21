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

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateSub = await Subscription.update(req.body, {
      where: {
        user_id: req.session.user_id,
        id: req.body.id,
      },
    });

    res.status(200).json(updateSub);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) =>{
  try {
    const subData = await Subscription.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!subData) {
      res.status(404).json({ message: 'No subscription found with this id!' });
      return;
    }

    res.status(200).json(subData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
