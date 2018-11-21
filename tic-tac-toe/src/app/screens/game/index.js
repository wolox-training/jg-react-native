import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clickSquare, clickStep } from '../../../redux/game/actions';

import style from './styles.scss';
import Board from './components/board';

class Game extends Component {
  getWinner = () =>
    this.props.winner ? `Winner: ${this.props.winner}` : `Next player:  ${this.props.xIsNext ? 'X' : 'O'}`;

  getMoves = history => {
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.props.dispatch(clickStep(move))}>{desc}</button>
        </li>
      );
    });
    return moves;
  };

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={i => this.props.dispatch(clickSquare(i))} />
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
  xIsNext: PropTypes.bool.isRequired,
  winner: PropTypes.string
};

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner
});

export default connect(mapStateToProps)(Game);
