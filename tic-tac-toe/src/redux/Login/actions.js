import authService from '@services/AuthService';
import { push } from 'connected-react-router';
import { JWTUSER } from '@constants/const';

export const actions = {
  CLICK_LOGIN: '@@LOGIN/CLICK_LOGIN',
  AUTH: '@@LOGIN/AUTH',
  ERROR: '@@LOGIN/ERROR',
  CHANGE: '@@LOGIN/CHANGE'
};

const serverError = 'An error occurred with the server';

const actionCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actions.CLICK_LOGIN });
    const response = await authService.auth(username, password);
    if (response.ok) {
      dispatch({ type: actions.AUTH });
      sessionStorage.setItem(JWTUSER, response.data.token);
      dispatch(push('/game'));
    } else {
      dispatch({ type: actions.ERROR, payload: response.data || serverError });
    }
  },

  change: state => ({
    type: actions.CHANGE,
    payload: state
  })
};

export default actionCreators;
