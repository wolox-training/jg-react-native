import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  const handleClick = () => {
    props.onClick(props.index);
  };

  return (
    <button className={style.square} onClick={handleClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
