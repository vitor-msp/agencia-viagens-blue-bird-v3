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

export const insertPurchase = (purchase) => {
  return {
    type: "insertPurchase",
    payload: purchase,
  };
};

export const clearMyPurchases = () => {
  return {
    type: "clearMyPurchases",
    payload: null,
  };
};
