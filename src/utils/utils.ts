import { User } from "../typings/types"

export const generateId = () => Math.random().toString(36).substring(7)

export const normalizeUsers = (users: any[]): User[] => {
  if (!users) return []

  return users.map(user => ({
    id: user.id.value || generateId(),
    name: `${user.name.first} ${user.name.last}`,
    email: user.email
  }))
}
