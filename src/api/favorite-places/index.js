import { clientFetch } from '../clientFetch'

const BASE_PLACES_URL = '/points'

export const getFavoritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL)
}

export const addFavoritePlace = (body) => {
  return clientFetch.post(BASE_PLACES_URL, body)
}

export const updateFavoritePlace = (body) => {
  return clientFetch.put(BASE_PLACES_URL, body)
}

export const deleteFavoritePlace = (body) => {
  return clientFetch.put(BASE_PLACES_URL, body)
}
