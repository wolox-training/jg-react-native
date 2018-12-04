import { push } from 'connected-react-router';
import loginActions from '@redux/Login/actions';
import { JWTUSER, LOGGEDIN, OUT } from '@constants/const';

export function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export function sessionValidation(dispatch, path) {
  let state;
  const token = sessionStorage.getItem(JWTUSER);
  if (token) {
    const parseToken = parseJwt(token);
    const now = Date.now() / 1000;
    state = now > parseToken.exp ? OUT : LOGGEDIN;
  } else {
    state = OUT;
  }
  dispatch(loginActions.change(state));
  if (state === OUT) {
    dispatch(push('/'));
  } else if (state === LOGGEDIN && path === '/') {
    dispatch(push('/game'));
  }
}

export function endSession(dispatch) {
  sessionStorage.removeItem(JWTUSER);
  dispatch(loginActions.change(OUT));
  dispatch(push('/'));
}
