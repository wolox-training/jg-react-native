import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clickSquare, clickStep } from '../../../redux/game/actions';
import { linesWin } from '../../../const';

import style from './styles.scss';
import Board from './components/board';

class Game extends Component {
  getWinner = current => {
    const winner = this.calculateWinner(current.squares);
    return winner ? `Winner: ${winner}` : `Next player:  ${this.props.xIsNext ? 'X' : 'O'}`;
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
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.dispatch(clickSquare({ squares }));
  };

  jumpTo = step => this.props.dispatch(clickStep(step));

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
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

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.any).isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = store => ({
  history: store.history,
  stepNumber: store.stepNumber,
  xIsNext: store.xIsNext
});

export default connect(mapStateToProps)(Game);