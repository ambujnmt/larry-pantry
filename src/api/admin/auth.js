import client from "../client"

export const adminLogin = (email, password) =>
  client("/admin/login", { method: "POST", body: { email, password } })

export const adminLogout = () =>
  client("/admin/logout", { method: "POST", auth: true })

export const adminForgotPassword = (email) =>
  client("/admin/forgot-password", { method: "POST", body: { email } })

export const adminResetPassword = (email, token, password, password_confirmation) =>
  client("/admin/reset-password", { method: "POST", body: { email, token, password, password_confirmation } })