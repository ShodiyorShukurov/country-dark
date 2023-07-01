import Card from "../Card";
import React from "react";
import "./country.scss";
import { Context as ThemeContext } from "../../context/ThemeContext";
import { Context as CountryContext } from "../../context/Country";

const Country = () => {
  const { theme } = React.useContext(ThemeContext);
  const { country, searchTitle, setSearchTitle } =
    React.useContext(CountryContext);

  return (
    <section className={`country-section main--${theme}`}>
      <div className="container">
        <form className="country-section__form">
          <input
            className={`country-section__form--input header--${theme}`}
            type="search"
            name="country_name"
            placeholder="Search for a country…"
            onChange={(evt) => setSearchTitle(evt.target.value)}
          />
          <select className={`country-section__form--select header--${theme}`}>
            <option value="All">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <div className="country-section__wrapper">
          <ul className="country-section__wrapper--list">
            {country.length > 0 &&
              country
                .filter((value) => {
                  if (searchTitle === "") {
                    return value;
                  } else if (
                    value.name.common
                      .toLowerCase()
                      .includes(searchTitle.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item) => (
                  <Card
                    key={item.name.common}
                    common={item.name.common}
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
