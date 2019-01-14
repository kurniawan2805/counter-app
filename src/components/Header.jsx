import React from "react";

const Header = props => {
  const activeCounter = props.counters.filter(count => count.quantity !== 0)
    .length;
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark ">
          <a
            className="navbar-brand"
            href="https://reactjs.org/docs/getting-started.html"
            target="blank_">
            <img
              src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fih1.redbubble.net%2Fimage.32576156.9850%2Fsticker%2C375x360.png"
              alt="google"
              height="32px"
            />
            LOGO
          </a>
          <span className="navbar-text text-light text-right">
            Active Items: <span className="text-danger"> {activeCounter}</span>
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Header;
