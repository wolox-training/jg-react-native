export const actions = {
  CLICK_SQUARE: '@@GAME/CLICK_SQUARE',
  CLICK_STEP: '@@GAME/CLICK_STEP'
};

export const clickSquare = item => ({
  type: actions.CLICK_SQUARE,
  payload: {
    item
  }
});
export const clickStep = step => ({
  type: actions.CLICK_STEP,
  payload: {
    step
  }
});
