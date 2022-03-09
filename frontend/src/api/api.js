import axios from "axios";

const url = `http://localhost`;
const port = 8080;

const api = axios.create({
  baseURL: `${url}:${port}/api/`,
  headers: {
    "Content-type": "application/json",
  },
});

const configToken = () => {
  const BBJwtInfo = JSON.parse(localStorage.getItem("BBJwtInfo"));
  const header = {
    Authorization: `${BBJwtInfo.tokenType} ${BBJwtInfo.token}`,
  };
  return header;
};

export const contact = async (contact) => {
  const res = await api
    .post(`/contact`, contact)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getDestinations = async () => {
  const res = await api
    .get(`/destinations`)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getOffers = async () => {
  const res = await api
    .get(`/offers`)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getTrips = async (destinationId, offerId) => {
  const res = await api
    .get(`/trips`, {
      params: {
        destinationId,
        offerId,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const createClient = async (client) => {
  const res = await api
    .post(`/auth/register`, client)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const login = async (client) => {
  const res = await api
    .post(`/auth/login`, client)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getClient = async () => {
  const res = await api
    .get(`/client`, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const updateClient = async (client) => {
  const res = await api
    .put(`/client`, client, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const updatePassword = async (client) => {
  const res = await api
    .put(`/client/password`, client, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getPurchases = async () => {
  const res = await api
    .get(`/purchases`, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const deletePurchase = async (purchaseId) => {
  const res = await api
    .delete(`/purchases`, {
      headers: configToken(),
      params: {
        purchaseId,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const postPurchase = async (purchase) => {
  const { tripId, offerId } = purchase;

  const res = await api
    .post(`/purchases`, null, {
      headers: configToken(),
      params: {
        tripId,
        offerId,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};
