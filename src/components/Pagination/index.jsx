import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context as ThemeContext } from "../../context/ThemeContext";
import "./pagination.scss";

const Paginition = ({ countriesPerPage, totalCountries, paginate }) => {

  const { theme } = React.useContext(ThemeContext);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="pagination-section">
        <ul className=" pagination-section__list">
          {pageNumbers.map((number) => (
            <li className={`page-item pagination-section__item  header--${theme}`} key={number}>
              <Link
                to={"/home"}
                className="page-link pagination-section__link"
                onClick={() => paginate(number)}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Paginition.propTypes = {
  countriesPerPage: PropTypes.number,
  totalCountries: PropTypes.number,
  paginate: PropTypes.func,
};
export default Paginition;
