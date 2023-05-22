import PropTypes from "prop-types";
import { Context as ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Card = ({ key, li, img, div, h2, p, src, title, pop, reg, cap}) => {

  const {theme}= useContext(ThemeContext)

  return (
    <li className={` header--${theme} ${li}`} key={key}>
      <img className={img} src={src} alt={h2} />
      <div className={div}>
        <h2 className={` main__text-${theme} ${h2}`}>{title}</h2>
        <p className={`${p} main__text-${theme}`}>Population: {pop}</p>
        <p className={`${p} main__text-${theme}`}>Region: {reg}</p>
        <p className={`${p} main__text-${theme}`}>Capital: {cap}</p> 
      </div>
    </li>
  );
};

Card.propTypes = {
  key: PropTypes.object,
  li: PropTypes.string,
  img: PropTypes.string,
  div: PropTypes.string,
  h2: PropTypes.string,
  p: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  pop: PropTypes.number,
  reg: PropTypes.string,
  cap: PropTypes.array,
};
export default Card;
