const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/foodpicture1resized.jpg" />
          <div>
            Photo by <a href="Ahttps://unsplash.com/@lvnatikk">Lily Banse</a> on{" "}
            <a href="https://unsplash.com/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        <hr></hr>
        <h2 className="trending">New Restaurants Trending Now</h2>
        <br></br>
        <h3 className="python">* Python Pizzeria</h3>
        <a href="http://localhost:3000/places/62d4600a5f4245b54b74cb20/">
          Visit Python Pizzeria's Rest-RANT page
        </a>
        <br></br>
        <h3 className="cantina">* CSS Cantina</h3>
        <a href="http://localhost:3000/places/62d45aa953260e73dc97c777/">
          Visit CSS Cantina's Rest-RANT page
        </a>
        <br></br>
        <h3 className="bbq">* SQL BBQ</h3>
        <a href="http://localhost:3000/places/62d461fe5f4245b54b74cb26/">
          Visit SQL BBQ's Rest-RANT page
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
