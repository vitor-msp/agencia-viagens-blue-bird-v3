import { formatDate } from "../../helpers/formatDateTime";

export const updateClientData = (clientData) => {
  return {
    type: "updateClientData",
    payload: {
      ...clientData,
      birthDate: formatDate(clientData.birthDate)
    },
  };
};

export const clearClientData = () => {
  return {
    type: "clearClientData",
    payload: null,
  };
};
