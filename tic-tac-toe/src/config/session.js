import loginActions from '@redux/Login/actions';
import { JWTUSER, LOGGEDIN, OUT } from '@constants/const';

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export function sessionValidation(dispatch) {
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
}
