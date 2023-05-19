import PropTypes from "prop-types";

const Card = ({ key, li, img, div, h2, p, src, title, pop, reg, cap}) => {
  console.log(key)
  return (
    <li className={li} key={key}>
      <img className={img} src={src} width={270} height={160} alt="" />
      <div className={div}>
        <h2 className={h2}>{title}</h2>
        <p className={p}>Population: {pop}</p>
        <p className={p}>Region: {reg}</p>
        <p className={p}>Capital: {cap}</p> 
      </div>
    </li>
  );
};

Card.propTypes = {
  key: PropTypes.string,
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
