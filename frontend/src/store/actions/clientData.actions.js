import { formatDate } from "../../helpers/formatDateTime";

export const insertClientEmail = (email) => {
  return {
    type: "insertClientEmail",
    payload: email,
  };
};

export const insertClientData = (client) => {
  return {
    type: "insertClientData",
    payload: {
      ...client,
      birthDate: formatDate(client.birthDate),
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
