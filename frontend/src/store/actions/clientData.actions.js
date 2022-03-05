import { formatDate } from "../../helpers/formatDateTime";

export const updateClientData = (clientData) => {

  localStorage.setItem("BBToken",clientData.token)
  localStorage.setItem("BBTokenType",clientData.tokenType)

  return {
    type: "updateClientData",
    payload: {
      ...clientData.client,
      birthDate: formatDate(clientData.client.birthDate)
    },
  };
};

export const clearClientData = () => {
  return {
    type: "clearClientData",
    payload: null,
  };
};
