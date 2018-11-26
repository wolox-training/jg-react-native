import { actions } from './actions';

const initialState = {
  username: null,
  password: null,
  loggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_LOGIN:
      return {
        username: action.payload.username,
        password: action.payload.password,
        loggedIn: true
      };
    default:
      return state;
  }
};

export default reducer;
