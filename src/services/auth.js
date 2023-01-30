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
  const data = await response.json()
  return {
    ...data,
    code: response.status,
  }
}

async function signup(email, username, password) {
  const user = {
    email,
    username,
    password,
  }

  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const data = await response.json()
  return {
    ...data,
    code: response.status,
  }
}

export { getUser, login, signup }
