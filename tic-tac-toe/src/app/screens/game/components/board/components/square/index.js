import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Square extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <button className={style.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
