import React, { Component } from 'react';

import Board from '../board';

import style from './styles.scss';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = i => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !this.state.xIsNext
    });
  };

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player:  ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className={style.gameInfo}>
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
