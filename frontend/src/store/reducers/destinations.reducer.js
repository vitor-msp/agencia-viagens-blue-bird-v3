export const destinationsReducer = (state = [], action) => {
  switch (action.type) {
    case "updateAllDestinations":
      return action.payload;

    default:
      return state;
  }
};
