import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Square extends Component {
  state = {
    value: null
  };

  render() {
    return (
      <button className={style.square} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;
