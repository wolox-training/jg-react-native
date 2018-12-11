export const actions = {
  ADD_ITEM: "@@TODO/ADD_ITEM"
};

export const actionCreators = {
  addItem: item => ({
    type: actions.ADD_ITEM,
    payload: item
  })
};
