export interface User {
  id: string
  name: string
  email: string
}

export interface InjectedProps {
  users: User[]
  onUserAdd: (user: User) => void
  onUserRemove: (id: string) => void
}