const router = require("express").Router();
const db = require("../models");

//INDEX
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//POST
router.post("/", (req, res) => {

  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});



//NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});


//SHOW
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});


//GET PLACES
router.get("/:id", (req, res) => {
  res.send("GET /places/:id stub");
});


//PUT PLACES
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

//DELETE PLACES
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});


//EDIT
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

//RANT
router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

//DELETE RANT
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
