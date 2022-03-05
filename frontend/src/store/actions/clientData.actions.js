import { formatDate } from "../../helpers/formatDateTime";

export const insertClientData = (clientData) => {

  localStorage.setItem("BBToken",clientData.token)
  localStorage.setItem("BBTokenType",clientData.tokenType)

  return {
    type: "insertClientData",
    payload: {
      ...clientData.client,
      birthDate: formatDate(clientData.client.birthDate)
    },
  };
};

export const updateClientData = (client) => {

  return {
    type: "updateClientData",
    payload: client,
  };
};

export const clearClientData = () => {
  return {
    type: "clearClientData",
    payload: null,
  };
};
