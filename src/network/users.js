import instance from "./axios"

export const createUser = async function (payload) {
  const { data } = await instance.post(`/users/create`, payload)
  return data
}

export const forgotPassword = async function (payload) {
  const { data } = await instance.post(`/auth/forgot-password`, payload)
  return data
}

export const resetPassword = async function (payload) {
  const { data } = await instance.post(`/auth/reset-password`, payload)
  return data
}
