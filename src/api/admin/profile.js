import client from "../client"
import API_BASE_URL from "../config"

export const getAdminProfile = () =>
  client("/admin/profile", { auth: true })

export const updateAdminProfile = async (formData) => {
  const token = localStorage.getItem("admin_token")
  const res = await fetch(`${API_BASE_URL}/admin/update-profile`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: formData,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || "Update failed")
  return data
}

export const changeAdminPassword = (old_password, new_password) =>
  client("/admin/change-password", {
    method: "POST",
    auth: true,
    body: { old_password, new_password }
  })