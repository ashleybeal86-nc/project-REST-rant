const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>
          <strong>OH NO!!!!!! Sorry, we can't find this page right now! </strong>
        </p>
        <p>(I probably just messed up my code, so please check back later)</p>

        <div>
          <img src="/images/404pagepicresized.jpg" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@l_oan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Loan
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
