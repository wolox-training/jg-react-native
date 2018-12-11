import { actions } from './actions';

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case actions.ADD_ITEM: 
      return{
        items: [...state.items, payload.item]
      }
    default: {
      return state
    }
  }
}
