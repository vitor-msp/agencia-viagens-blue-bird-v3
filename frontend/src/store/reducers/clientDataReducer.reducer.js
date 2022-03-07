const defaultData = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
};

export const clientDataReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "insertClientEmail":
      return action.payload;

    case "updateClientData":
      return action.payload;

    case "clearClientData":
      return defaultData;

    default:
      return state;
  }
};
