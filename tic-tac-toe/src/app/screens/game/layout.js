import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';
import Board from './components/board';

class Game extends Component {
  getMoves = history => {
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      const jumpClick = () => {
        this.jumpTo(move);
      };
      return (
        <li key={move}>
          <button onClick={jumpClick}>{desc}</button>
        </li>
      );
    });
    return moves;
  };

  render() {
    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={this.props.squares} onClick={this.props.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <div>{this.props.winner}</div>
          <ol>{this.getMoves(this.props.history)}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  winner: PropTypes.string.isRequired
};

export default Game;
