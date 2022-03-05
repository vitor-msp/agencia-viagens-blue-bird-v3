export const myPurchasesReducer = (state = [], action) => {
  switch (action.type) {
    case "updateAllMyPurchases":
      return action.payload;

    case "removePurchase":
      return state.filter(({ id }) => id !== action.payload);

    case "insertPurchase":
      state.push(action.payload);
      return state;

    case "clearMyPurchases":
      return [];

    default:
      return state;
  }
};
