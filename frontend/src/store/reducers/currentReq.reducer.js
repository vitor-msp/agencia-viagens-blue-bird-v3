const defaultCurrentReq = {
  offer: null,
};

export const currentReqReducer = (state = defaultCurrentReq, action) => {
  switch (action.type) {
    case "updateCurrentOffer":
      return {
        ...state,
        offer: action.payload,
      };
    case "clearCurrentOffer":
      return {
        ...state,
        offer: action.payload,
      };
    default:
      return state;
  }
};
