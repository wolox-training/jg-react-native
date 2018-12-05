import authService from '@services/AuthService';
import { JWTUSER } from '@constants/const';

export const actions = {
  LOGIN_LOADING: '@@LOGIN/CLICK_LOGIN',
  LOGIN_SUCCESS: '@@LOGIN/AUTH',
  LOGIN_FAILURE: '@@LOGIN/ERROR'
};

const serverError = 'An error occurred with the server';

const privateActionCreators = {
  loginSuccess: token => {
    sessionStorage.setItem(JWTUSER, token);
    return { type: actions.LOGIN_SUCCESS };
  },
  loginFailure: message => ({ type: actions.LOGIN_FAILURE, payload: message || serverError })
};

const actionCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actions.LOGIN_LOADING });
    const response = await authService.auth(username, password);
    if (response.ok) {
      dispatch(privateActionCreators.loginSuccess(response.data.toke));
    } else {
      dispatch(privateActionCreators.loginFailure(response.data));
    }
  }
};

export default actionCreators;
