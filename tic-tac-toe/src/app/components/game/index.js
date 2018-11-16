import React, { Component } from 'react';

import Board from '../board';
import { linesWin } from '../../const';

import style from './styles.scss';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  getWinner = current => {
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player:  ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return status;
  };

  getMoves = history => {
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return moves;
  };

  calculateWinner = squares => {
    for (let i = 0; i < linesWin.length; i += 1) {
      const [a, b, c] = linesWin[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: [...prevState.history, { squares }],
      stepNumber: prevState.history.length,
      xIsNext: !this.state.xIsNext
    }));
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className={style.gameInfo}>
          <div>{this.getWinner(current)}</div>
          <ol>{this.getMoves(history)}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
