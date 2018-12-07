import { withPostSuccess, createTypes, completeTypes } from 'redux-recompose';
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
      withPostSuccess((dispatch, response) => {
        sessionStorage.setItem(JWTUSER, response.data);
      })
    ]
  })
};

export default actionCreators;
