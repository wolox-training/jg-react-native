export const actions = {
  CLICK_SQUARE: '@@GAME/CLICK_SQUARE',
  CLICK_STEP: '@@GAME/CLICK_STEP',
  CLEAN: '@@GAME/CLEAN'
};

export const clickSquare = squares => ({
  type: actions.CLICK_SQUARE,
  payload: { squares }
});
export const clickStep = step => ({
  type: actions.CLICK_STEP,
  payload: {
    step
  }
});
export const cleanGame = () => ({
  type: actions.CLEAN
});
