const router = require("express").Router();

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/restaurantpic1.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Miami",
      state: "FL",
      cuisines: "Coffee, Bakery",
      pic: "/images/restaurantpic2.jpg",
    },
  ];
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});


module.exports = router;
