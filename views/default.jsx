const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Rest-RANT</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/foodfavicon2.png"
          src="https://icons8.com/icon/8439/meal"
        />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>
        {html.children}
      </body>
      <hr></hr>
      <h2 class="trending">New Restaurants Trending Now</h2>
      <br>
      </br>
      <h3>Python Pizzeria</h3>
      <br>
      </br>
      <h3>CSS Cantina</h3> 
      <br>
      </br>
      <h3>SQL BBQ</h3>
    </html>
  );
}

module.exports = Def;
