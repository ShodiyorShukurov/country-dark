import { Link } from "react-router-dom";

const Paginition = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <Link
              to={"/home"}
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Paginition;
