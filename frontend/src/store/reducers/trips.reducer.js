export const tripsReducer = (state = [], action) => {
  switch (action.type) {
    case "updateTrips":
      return action.payload;

    default:
      return state;
  }
};
