import React from "react";
import PropTypes from "prop-types";
// import { Provider as CountryProvider } from "./Country";
import { Provider as ThemeProvider } from "./ThemeContext/index";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <ThemeProvider>{children}</ThemeProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
