const router = require("express").Router();
const { User, Subscription } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const project = projectData.get({ plain: true });
    res.render("project", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", async (req, res) => {
  res.render("calendar");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },

    });
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user,

      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

router.get("/events", (req, res) => {
  // Use subscription model to get data from database

  // give data back as response so calanedar.js can fill up the events
  return res.json({
    events: [
      {
        title: "event1",
        start: "2021-06-21",
      },
      {
        title: "event2",
        start: "2021-06-05",
        end: "2021-06-20",
      },
      {
        title: "event3",
        start: "2021-06-23T12:30:00",
        allDay: false, // will make the time show
      },
    ],
  });
});

router.get("/prices", (req, res) => {
  // Use subscription model to get data from database

  // This requires a json made from the subscription model that fetches the name and price of each one
  return res.json({
    data: [
      {
        label: 'subscription 1',
        price: 15
      },
      {
        label: 'subscription 2',
        price: 25
      },
      {
        label: 'subscription 3',
        price: 20
      },
      {
        label: 'subscription 4',
        price: 10
      },
      {
        label: 'subscription 5',
        price: 5
      },
    ],
  });
});

module.exports = router;
