export const updateModalInfo = (info, primary = false) => {
  return {
    type: "updateModalInfo",
    payload: {
      info,
      primary,
    },
  };
};
export const clearModalInfo = () => {
  return {
    type: "clearModalInfo",
    payload: null,
  };
};
