import { API_URL } from '../config'

async function getLinks(token) {
  if (!token) return null

  const response = await fetch(`${API_URL}/links`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  })
  return await response.json()
}

export { getLinks }
