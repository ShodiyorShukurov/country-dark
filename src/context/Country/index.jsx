import React from "react";
import { PropTypes } from "proptype";
import api from "../../Api/api";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [country, setCountry] = React.useState([]);
  const [searchTitle, setSearchTitle] = React.useState("");

  React.useEffect(() => {
    api
      .get("all")
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Context.Provider value={{ country, searchTitle, setSearchTitle}}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
