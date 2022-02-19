export const modalLoginReducer = (state = false, action) => {
  switch (action.type) {
    case "showModalLogin":
      return action.payload;

    default:
      return state;
  }
};