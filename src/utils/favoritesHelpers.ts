import { Building } from '../typings/building'

export function getFavorite(id: number) {
  return localStorage.getItem(`${id}`)
}

export function getFavorites() {
  return Object.values(localStorage).map(item => JSON.parse(item))
}

export function getTotalFavorites() {
  return Object.values(localStorage).length
}

export function addFavorite(data: Building) {
  return localStorage.setItem(`${data.id}`, JSON.stringify(data))
}

export function removeFavorite(data: Building) {
  return localStorage.removeItem(`${data.id}`)
}
