import { push } from 'connected-react-router';
import loginActions from '@redux/Login/actions';
import { JWTUSER } from '@constants/const';

export function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export function sessionValidation(dispatch, path) {
  let state = false;
  const token = sessionStorage.getItem(JWTUSER);
  if (token && token !== 'undefined') {
    const parseToken = parseJwt(token);
    const now = Date.now() / 1000;
    state = parseToken.exp > now;
  }
  if (!state) {
    dispatch(push('/'));
  } else if (state && path === '/') {
    dispatch(push('/game'));
  }
}

export function endSession(dispatch) {
  sessionStorage.removeItem(JWTUSER);
  dispatch(loginActions.change(false));
  dispatch(push('/'));
}
