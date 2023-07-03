import Card from "../Card";
import React from "react";
import "./country.scss";
import { Context as ThemeContext } from "../../context/ThemeContext";
import { Context as CountryContext } from "../../context/Country";
import Paginition from "../Pagination";

const Country = () => {
  const { theme } = React.useContext(ThemeContext);
  const { country, setSearchTitle } = React.useContext(CountryContext);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [countriesPerPage] = React.useState(12);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [filteredCountries, setFilteredCountries] = React.useState([]);

  const currentCountry =
    filteredCountries.length > 0
      ? filteredCountries.slice(firstCountryIndex, lastCountryIndex)
      : country.slice(firstCountryIndex, lastCountryIndex);

  return (
    <section className={`country-section main--${theme}`}>
      <div className="container">
        <form className="country-section__form">
          <input
            className={`country-section__form--input header--${theme}`}
            type="search"
            name="country_name"
            placeholder="Search for a country…"
            onChange={(evt) => {
              const searchValue = evt.target.value;
              setSearchTitle(searchValue);
              const filtered = country.filter((item) =>
                item.name.common
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );
              setFilteredCountries(filtered);
            }}
          />
          <select
            className={`country-section__form--select header--${theme}`}
            onChange={(evt) => {
              const searchValue = evt.target.value;
              setSearchTitle(searchValue);
              if (searchValue === "All") {
                setFilteredCountries([]);
              } else {
                const filtered = country.filter((item) =>
                  item.region.toLowerCase().includes(searchValue.toLowerCase())
                );
                setFilteredCountries(filtered);
              }
            }}
          >
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
            {currentCountry.map((item) => (
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
          <Paginition
            countriesPerPage={countriesPerPage}
            totalCountries={
              filteredCountries.length > 0
                ? filteredCountries.length
                : country.length
            }
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Country;
