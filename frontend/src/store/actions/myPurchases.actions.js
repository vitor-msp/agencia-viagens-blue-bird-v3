export const updateAllMyPurchases = (purchases) => {
  return {
    type: "updateAllMyPurchases",
    payload: purchases,
  };
};

export const removePurchase = (id) => {
  return {
    type: "removePurchase",
    payload: id,
  };
};

export const clearMyPurchases = () => {
  return {
    type: "clearMyPurchases",
    payload: null,
  };
};
