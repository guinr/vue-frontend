import * as userResource from './userResource'

export function getUsers() {
  return userResource.getUsers()
    .then(response => response.data)
}

export function getUser(uuid) {
  return userResource.getUser(uuid)
    .then(response => response.data)
}

export function createOrUpdateUser(user) {
  return userResource.createOrUpdateUser(user)
}

export function deleteUser(uuid) {
  return userResource.deleteUser(uuid)
}