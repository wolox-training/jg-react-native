import { withSuccess, createTypes, completeTypes } from 'redux-recompose';
import authService from '@services/AuthService';
import { JWTUSER } from '@constants/const';

export const actions = createTypes(completeTypes(['LOGIN']), '@@LOGIN');

const actionCreators = {
  login: (username, password) => ({
    type: actions.LOGIN,
    target: 'login',
    service: authService.auth,
    payload: { username, password },
    injections: [
      withSuccess((dispatch, response) => {
        sessionStorage.setItem(JWTUSER, response.data);
        dispatch({ type: actions.LOGIN_SUCCESS, target: 'login', payload: response.data });
      })
    ]
  })
};

export default actionCreators;
