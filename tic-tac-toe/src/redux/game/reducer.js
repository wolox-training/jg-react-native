import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_SQUARE:
      return {
        history: [...state.history, action.payload.squares],
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };
    case actions.CLICK_STEP:
      return {
        ...state,
        stepNumber: action.payload.step,
        xIsNext: action.payload.step % 2 === 0
      };
    default:
      return state;
  }
};

export default reducer;
