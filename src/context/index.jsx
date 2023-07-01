import React from "react";
import PropTypes from "prop-types";
import { Provider as CountryProvider } from "./Country";
import { Provider as ThemeProvider } from "./ThemeContext/index";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <CountryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CountryProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export { Context, Provider };
