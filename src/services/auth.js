import { API_URL } from '../config'

async function getUser(token) {
  if (!token) return null

  const response = await fetch(`${API_URL}/login/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  })
  return await response.json()
}

async function login(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${email}&password=${password}`,
  })
  return await response.json()
}

export { getUser, login }
