import authService from '@services/AuthService';
import { push } from 'connected-react-router';

export const actions = {
  CLICK_LOGIN: '@@LOGIN/CLICK_LOGIN',
  AUTH: '@@LOGIN/AUTH',
  ERROR: '@@LOGIN/ERROR',
  CHANGE: '@@LOGIN/CHANGE'
};

const actionCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actions.CLICK_LOGIN });
    const response = await authService.auth(username, password);
    if (response.ok) {
      dispatch({ type: actions.AUTH, payload: response.data });
      dispatch(push('/game'));
    } else {
      dispatch({ type: actions.ERROR, payload: response.problem });
    }
  },

  change: state => ({
    type: actions.CHANGE,
    payload: state
  })
};

export default actionCreators;
