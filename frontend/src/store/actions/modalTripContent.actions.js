export const updateModalTripContent = (
  trip,
  destination,
  offer,
  isGetPurchase,
  purchase = null
) => {
  return {
    type: "updateModalTripContent",
    payload: {
      trip,
      destination,
      offer,
      isGetPurchase,
      purchase,
    },
  };
};
export const clearModalTripContent = () => {
  return {
    type: "clearModalTripContent",
    payload: null,
  };
};
