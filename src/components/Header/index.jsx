import React from "react";
import "./header.scss";
// import { Context as ThemeContext } from "../../context";

const Header = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme == "light" ? "dark" : "light");
  };
  
  return (
    <header className={`site-header site--${theme}`}>
      <div className="container">
        <div className="site-header__wrapper">
          <div className="site-header__wrapper--start">
            <a href="/" className={`site-header__wrapper--link site--${theme}`}>
              Where in the world?
            </a>
          </div>
          <div className="site-header__wrapper--end">
            <button
              className={`site-header__wrapper--btn site--${theme}`}
              onClick={() => toggleTheme()}
            >
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
