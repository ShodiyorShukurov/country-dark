import React from "react";
import "./about.scss";
import { Link, useParams } from "react-router-dom";
import api from "../../Api/api";
import { BiArrowBack } from "react-icons/bi";
import { Context as ThemeContext } from "../../context/ThemeContext";

const About = () => {
  const { theme } = React.useContext(ThemeContext);

  const { common } = useParams();
  const [desc, setDesc] = React.useState([]);

  React.useEffect(() => {
    api
      .get("name/" + common)
      .then((res) => setDesc(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className={`about-section main--${theme}`}>
        <div className="container">
          <div className="about-section__wrapper">
            <div className="about-section__wrapper-start">
              <Link to="/" className={`about-section__btn header--${theme}`}>
                <BiArrowBack />
                Back
              </Link>
            </div>

            {desc.length > 0 &&
              desc.map((about, index) => (
                <div className="about-section__wrapper-end" key={index}>
                  <div className="about-section__wrapper-flags">
                    <img
                      className="about-section__wrapper--flags-img"
                      src={about.flags.png}
                      alt={about.flags.alt || "undefined"}
                      width={560}
                      height={480}
                    />
                  </div>
                  <div className="about-section__wrapper-aboutes">
                    <h2 className={`about-section__title main__text-${theme}`}>
                      {common}
                    </h2>
                    <ul className="about-section__list">
                      <div className="first">
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Native Name:</strong>{" "}
                            {about.name.nativeName ? (
                              Object.values(about.name.nativeName)[0].common
                            ) : (
                              <span className="text-danger">
                                Native name does not exist
                              </span>
                            )}
                          </p>
                        </li>
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Population:</strong> {about.population}
                          </p>
                        </li>
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Region:</strong> {about.region}
                          </p>
                        </li>
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Sub Region:</strong>{" "}
                            {about.subregion ? (
                              about.subregion
                            ) : (
                              <span className="text-danger">
                                Sub region does not exist
                              </span>
                            )}
                          </p>
                        </li>
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Capital:</strong>{" "}
                            {about.capital ? (
                              about.capital
                            ) : (
                              <span className="text-danger">
                                Capital is not available
                              </span>
                            )}
                          </p>
                        </li>
                      </div>
                      <div className="second">
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Top Level Domain:</strong> {about.tld + " "}
                          </p>
                        </li>
                        <li className="about-section__item">
                          <p
                            className={`about-section__text main__text-${theme}`}
                          >
                            <strong>Currencies: </strong>
                            {about.currencies ? (
                              Object.values(about.currencies)[0].name
                            ) : (
                              <span className="text-danger">
                                Currencies are not available
                              </span>
                            )}
                          </p>
                        </li>
                        <li className="about-section__item">
                        {about.languages &&
                          Object.values(about.languages).map((language, index) => (
                            <p
                              className={`about-section__text main__text-${theme}`}
                              key={index}
                            >
                              <strong>Language: </strong>
                              {language}
                            </p>
                          ))
                        }
                        
                        </li>
                      </div>
                    </ul>
                    <div className=" borders-country">
                      <h3
                        className={`about-section__border-country main__text-${theme}`}
                      >
                        Border Countries:
                      </h3>
                      {about.borders && about.borders.length > 0 ? (
                        about.borders.map((borders) => (
                          <p
                            className={`about-section__btn header--${theme} mx-2`}
                            key={borders}
                          >
                            {borders}
                          </p>
                        ))
                      ) : (
                        <span className="text-danger">
                          There are no bordering countries
                        </span>
                      )}
                    </div>
                    <div className="borders">
                      <h3
                        className={`about-section__border-country main__text-${theme}`}
                      >
                        Border Countries:
                      </h3>
                      <div className="d-flex flex-wrap">
                        {about.borders && about.borders.length > 0 ? (
                          about.borders.map((borders) => (
                            <p
                              className={`about-section__btn country header--${theme}`}
                              key={borders}
                            >
                              {borders}
                            </p>
                          ))
                        ) : (
                          <span className="text-danger">
                            There are no bordering countries
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
