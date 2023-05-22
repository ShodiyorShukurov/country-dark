import React from "react";
import "./header.scss";
import { Context as ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  // const [theme, setTheme] = React.useState(
  //   localStorage.getItem("theme") || "light"
  // );

  // const toggleTheme = () => {
  //   localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  //   setTheme(theme == "light" ? "dark" : "light");
  // };

  return (
    <header className={`site-header header--${theme}`}>
      <div className="container">
        <div className="site-header__wrapper">
          <div className="site-header__wrapper--start">
            <a href="/" className={`site-header__wrapper--link header--${theme}`}>
              Where in the world?
            </a>
          </div>
          <div className="site-header__wrapper--end">
            <button
              className={`site-header__wrapper--btn header--${theme}`}
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
