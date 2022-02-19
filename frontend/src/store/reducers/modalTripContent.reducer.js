export const modalTripContentReducer = (state = null, action) => {
  switch (action.type) {
    case "updateModalTripContent":
      return action.payload;

    case "clearModalTripContent":
      return action.payload;

    default:
      return state;
  }
};
