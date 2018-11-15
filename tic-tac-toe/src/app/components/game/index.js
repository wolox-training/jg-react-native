import React, { Component } from 'react';

import Board from '../board';

import style from './styles.scss';

class Game extends Component {
  render() {
    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board />
        </div>
        <div className={style.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
