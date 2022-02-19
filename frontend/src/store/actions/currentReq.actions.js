export const updateCurrentOffer = (offer) => {
  return {
    type: "updateCurrentOffer",
    payload: offer,
  };
};
export const clearCurrentOffer = () => {
  return {
    type: "clearCurrentOffer",
    payload: null,
  };
};
