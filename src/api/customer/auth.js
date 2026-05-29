import client from "../client"

export const customerLogin = (email, password) =>
  client("/login", { method: "POST", body: { email, password } })

export const customerRegister = (data) =>
  client("/register", { method: "POST", body: data })