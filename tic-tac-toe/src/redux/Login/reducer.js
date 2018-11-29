import { LOGGEDIN, LOADING, OUT, ERROR } from '@constants/const';

import { actions } from './actions';

const initialState = {
  loggedState: OUT,
  errorAuthMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_LOGIN:
      return {
        loggedState: LOADING,
        errorAuthMessage: null
      };
    case actions.AUTH:
      return {
        loggedState: LOGGEDIN,
        errorAuthMessage: null
      };
    case actions.ERROR:
      return {
        loggedState: ERROR,
        errorAuthMessage: action.payload
      };
    case actions.CHANGE:
      return {
        loggedState: action.payload,
        errorAuthMessage: null
      };
    default:
      return state;
  }
};

export default reducer;
