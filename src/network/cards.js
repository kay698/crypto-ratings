import instance from "./axios";

export async function getAllGiftCardCategories(payload) {
  const { data } = await instance.get(`/gift-cards?${payload}`);
  return data;
}

export const getAllGiftCards = async function (payload) {
  const { data } = await instance.get(
    `/gift-cards/category/${payload.giftCardCategoryId}?page=${payload.page}&perPage=${payload.perPage}`
  );
  return data;
};

export const getAllCrypto = async function (payload) {
  const { data } = await instance.get(`/crypto?${payload}`);
  return data;
};

export const getSingleCrypto = async function (cryptoId) {
  const { data } = await instance.get(`/crypto/${cryptoId}`);
  return data;
};

export const getSingleGiftCard = async function (productId) {
  const { data } = await instance.get(`/products/${productId}`);
  return data;
};
