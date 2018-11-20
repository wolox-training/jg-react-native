import { actions } from '../actions';
import { linesWin } from '../const';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

const calculateWinner = squares => {
  for (let i = 0; i < linesWin.length; i += 1) {
    const [a, b, c] = linesWin[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const handleClick = (state, i) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const winner = calculateWinner(squares);
  if (winner) {
    return { ...state, winner };
  }
  if (squares[i]) {
    return state;
  }
  squares[i] = state.xIsNext ? 'X' : 'O';
  return {
    history: [...state.history, { squares }],
    stepNumber: state.history.length,
    xIsNext: !state.xIsNext,
    winner: calculateWinner(squares)
  };
};

const jumpTo = step => ({
  stepNumber: step,
  xIsNext: step % 2 === 0,
  winner: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_SQUARE:
      return handleClick(state, action.payload.item);
    case actions.CLICK_STEP:
      return { ...state, ...jumpTo(action.payload.step) };
    default:
      return state;
  }
};

export default reducer;
