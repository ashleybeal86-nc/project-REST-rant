const React = require('react');
const Def = require('./default');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.send('404 page');
});

app.get('/', (req, res) => {
  let places = [];
  res.render('places/index', { places });
});

let places = [
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "http://placekitten.com/250/250",
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "http://placekitten.com/250/250",
  },
];

module.exports = index;
