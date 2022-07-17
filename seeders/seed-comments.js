const db = require("../models");

// To use await, we need an async function.
async function seed() {
  // Get the place, H-Thai-ML
  let place = await db.Place.findOne({ name: "H-Thai-ML" });

  // Create a fake sample comment.
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    stars: 5.0,
    content: "Wow, simply amazing! Highly recommended!",

    author: "Starvin Marvin",
    rant: true,
    stars: 2.5,
    content: "Expected the food to be better",

    author: "Hungry Hailey",
    rant: false,
    stars: 4.5,
    content: "The staff was great and food was good",
  });

  // Add that comment to the place's comment array.
  place.comments.push(comment.id);

  //save the place now that it has comment
  await place.save();

  // Exit the program
  process.exit();
}

seed();
