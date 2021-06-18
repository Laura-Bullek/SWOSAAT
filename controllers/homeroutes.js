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

router.post("/subscription/:id", async (req, res) => {
  try {
    const addEvent = await User.findone({
      where: {
        service_name: req.body.service_name,
        price: req.body.price,
        input_date: req.body.input_date,
      },
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
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

module.exports = router;
