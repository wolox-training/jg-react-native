export const actions = {
  CLICK_LOGIN: '@@LOGIN/CLICK_LOGIN'
};

export const clickLogin = (username, password) => ({
  type: actions.CLICK_LOGIN,
  payload: { username, password }
});
