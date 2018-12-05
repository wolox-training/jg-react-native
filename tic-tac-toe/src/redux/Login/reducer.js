import { actions } from './actions';

const initialState = {
  loginLoading: false,
  loginSuccess: false,
  errorAuthMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_LOADING:
      return {
        loginLoading: true,
        loginSuccess: false,
        errorAuthMessage: null
      };
    case actions.LOGIN_SUCCESS:
      return {
        loginLoading: false,
        loginSuccess: true,
        errorAuthMessage: null
      };
    case actions.LOGIN_FAILURE:
      return {
        loginLoading: false,
        loginSuccess: false,
        errorAuthMessage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
