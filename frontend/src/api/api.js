import axios from "axios";

const port = 8080;

const api = axios.create({
  baseURL: `http://192.168.0.13:${port}/`,
  headers: {
    "Content-type": "application/json",
  },
});

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

export const updateClient = async (client) => {
  const res = await api.put(`/client`, client);
  return res.data;
};

export const login = async (client) => {
  const res = await api.post(`/login`, client);
  return res.data;
};

export const setPassword = async (client) => {
  const res = await api.post(`/setPassword`, client);
  return res.data;
};

export const postPurchase = async (purchaseToPost) => {
  const res = await api.post(`/postPurchase`, purchaseToPost);
  return res.data;
};

export const getPurchases = async (client) => {
  const res = await api.post(`/getPurchases`, client);
  return res.data;
};

export const deletePurchase = async (purchaseToDelete) => {
  const res = await api.post(`/deletePurchase`, purchaseToDelete);
  return res.data;
};
