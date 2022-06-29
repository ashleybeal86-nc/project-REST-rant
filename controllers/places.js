const router = require("express").Router();

// More code here in a moment

module.exports = router;


//making first route in places.js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("GET /places");
});

module.exports = router;
