import { withPostSuccess, createTypes, completeTypes } from 'redux-recompose';
import authService from '@services/AuthService';
import { JWTUSER } from '@constants/const';

export const actions = createTypes(completeTypes(['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE']), '@@LOGIN');

const privateActionCreators = {
  loginSuccess: token => {
    sessionStorage.setItem(JWTUSER, token);
    return { type: actions.LOGIN_SUCCESS };
  },
  change: state => ({ type: state ? actions.LOGIN_SUCCESS : actions.LOGIN_FAILURE })
};

const actionCreators = {
  login: (username, password) => ({
    type: actions.LOGIN,
    target: 'login',
    service: authService.auth,
    payload: { username, password },
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch(privateActionCreators.loginSuccess(response.data));
      })
    ]
  }),
  change: state => privateActionCreators.change(state)
};

export default actionCreators;
