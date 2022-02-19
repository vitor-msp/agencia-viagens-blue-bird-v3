export const updateClientData = (clientData) => {
  return {
    type: "updateClientData",
    payload: clientData,
  };
};

export const clearClientData = () => {
  return {
    type: "clearClientData",
    payload: null,
  };
};
