import axios from 'axios'

const SERVER = 'http://localhost:3000'

export function getUsers() {
  return axios.get(`${SERVER}/users`)
}

export function getUser(uuid) {
  return axios.get(`${SERVER}/users?uuid=${uuid}`)
}

export function createOrUpdateUser(user) {
  return axios.put(`${SERVER}/users`, user)
}

export function deleteUser(uuid) {
  return axios.delete(`${SERVER}/users/${uuid}`)
}