import { LOGGEDIN, NOAUTH, LOADING, OUT, ERROR } from '@constants/const';

import { actions } from './actions';

const initialState = {
  loggedEstate: OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_LOGIN:
      return {
        loggedEstate: LOADING
      };
    case actions.AUTH:
      return {
        loggedEstate: action.payload ? LOGGEDIN : NOAUTH
      };
    case actions.ERROR:
      return {
        loggedEstate: ERROR
      };
    case actions.CHANGE:
      return {
        loggedEstate: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
