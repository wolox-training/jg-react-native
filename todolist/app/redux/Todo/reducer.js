import { actions } from './actions';

const initialState = {
  items: [
    { id: '1', name: 'Item de prueba 1', completed: true },
    { id: '2', name: 'Item de prueba 2', completed: true },
    { id: '3', name: 'Item de prueba 3', completed: false },
    { id: '4', name: 'Item de prueba 4', completed: true },
    { id: '5', name: 'Item de prueba 5', completed: false }
  ],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case actions.ADD_ITEM: 
      return{
        items: [...state.items, payload.item]
      }
    case actions.REMOVE_ITEM: 
      return{
        items: state.items.filter(item => item.id !== payload.item.id)
      }
    case actions.TOGGLE_ITEM_COMPLETED: 
      return{
        items: state.items.map(item => item.id === payload.item.id ? {...payload.item, completed: !payload.item.completed } : item)
      }
    case actions.REMOVE_COMPLETED_ITEMS: 
      return{
        items: state.items.filter(item => item.completed === false)
      }
    default: {
      return state
    }
  }
}
