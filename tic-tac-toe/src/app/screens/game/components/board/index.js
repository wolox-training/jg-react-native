import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rowItems } from '../../../../../const';

import Square from './components/square';
import style from './styles.scss';

class Board extends Component {
  getRows = () => {
    const rows = rowItems.map(r => (
      <div key={r} className={style.boardRow}>
        {r.map(c => this.renderSquare(c))}
      </div>
    ));
    return rows;
  };

  renderSquare = i => <Square value={this.props.squares[i]} key={i} onClick={() => this.props.onClick(i)} />;

  render() {
    return (
      <React.Fragment>
        <div className={style.status}>{status}</div>
        {this.getRows()}
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
