export const offersReducer = (state = [], action) => {
  switch (action.type) {
    case "updateAllOffers":
      return action.payload;

    default:
      return state;
  }
};
