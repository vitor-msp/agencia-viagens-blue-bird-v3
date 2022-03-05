export const updateModalTripContent = (
  trip,
  destination,
  offer,
  isGetPurchase,
  purchaseId = null
) => {
  return {
    type: "updateModalTripContent",
    payload: {
      trip,
      destination,
      offer,
      isGetPurchase,
      purchaseId,
    },
  };
};
export const clearModalTripContent = () => {
  return {
    type: "clearModalTripContent",
    payload: null,
  };
};
