import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  return (
    <button className={style.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;
