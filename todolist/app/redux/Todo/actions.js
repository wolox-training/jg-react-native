export const actions = {
  ADD_ITEM: "@@TODO/ADD_ITEM",
  REMOVE_ITEM: "@@TODO/REMOVE_ITEM",
  TOGGLE_ITEM_COMPLETED: "@@TODO/TOGGLE_ITEM_COMPLETED",
  REMOVE_COMPLETED_ITEMS: "@@TODO/REMOVE_COMPLETED_ITEMS"
};

export const actionCreators = {
  addItem: item => ({
    type: actions.ADD_ITEM,
    payload: { item }
  }),
  removeItem: item => ({
    type: actions.REMOVE_ITEM,
    payload: { item }
  }),
  completedItem: item => ({
    type: actions.TOGGLE_ITEM_COMPLETED,
    payload: { item }
  }),
  removeCompletedItems: () => ({
    type: actions.REMOVE_COMPLETED_ITEMS
  })
};
