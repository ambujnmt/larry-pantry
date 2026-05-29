import API_BASE_URL from "./config"

const client = async (endpoint, { body, method = "GET", auth = false } = {}) => {

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  // Auth token automatically will be added
  if (auth) {
    const token = localStorage.getItem("admin_token")
    headers["Authorization"] = `Bearer ${token}`
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || "Something went wrong")

  return data
}

export default client