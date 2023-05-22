import Card from "../Card";
import React from "react";
import api from "../../Api/api";
import "./country.scss";
import { Context as ThemeContext } from "../../context/ThemeContext";

const Country = () => {
  const { theme } = React.useContext(ThemeContext);

  const [country, setCountry] = React.useState([]);

  React.useEffect(() => {
    api
      .get("all")
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className={`country-section main--${theme}`}>
      <div className="container">
        <form className="country-section__form">
          <input
            className={`country-section__form--input header--${theme}`}
            type="search"
            name="country_name"
            placeholder="Search for a country…"
          />
          <select className={`country-section__form--select header--${theme}`}>
            <option disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <div className="country-section__wrapper">
          <ul className="country-section__wrapper--list">
            {country.length > 0 &&
              country.slice(0,12).map((item) => (
                <Card
                  key={item.name.common}
                  src={item.flags.png}
                  title={item.name.common}
                  pop={item.population}
                  reg={item.region}
                  cap={item.capital}
                  li="country-section__wrapper--item"
                  img="country-section__wrapper--img"
                  div="country-section__wrapper--desc"
                  h2="country-section__wrapper--title"
                  p="country-section__wrapper--text"
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Country;
