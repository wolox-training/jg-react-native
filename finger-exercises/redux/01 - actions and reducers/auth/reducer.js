import { actions } from './actions';

const initialState = {
  email: null,
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        email: action.payload.email,
        token: action.payload.token
      };
    default:
      return state;
  }
}

export default reducer;
