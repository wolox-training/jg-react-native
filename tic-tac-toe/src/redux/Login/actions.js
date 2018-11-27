import authService from '@services/AuthService';

export const actions = {
  CLICK_LOGIN: '@@LOGIN/CLICK_LOGIN',
  AUTH: '@@LOGIN/AUTH',
  ERROR: '@@LOGIN/ERROR'
};

const actionCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actions.CLICK_LOGIN });
    const response = await authService.auth(username, password);
    if (response.ok) {
      dispatch({ type: actions.AUTH, payload: response.data });
    } else {
      dispatch({ type: actions.ERROR, payload: response.problem });
    }
  }
};

export default actionCreators;
