import React from "react"

const API_URL = "https://api.randomuser.me/?results=10"

export interface User {
  id: string
  name: string
  email: string
}

interface State {
  users: User[]
  loading: boolean
  error: string | null
}

const normalizeUsers = (users: any[]): User[] => {
  if (!users) return []

  return users.map(user => ({
    id: user.id.value,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email
  }))
}

const withUsers = <P extends object>(WrapperComponent: React.ComponentType<P>) => {
  class WithUsers extends React.Component<P, State> {
    state = {
      users: [],
      loading: false,
      error: null
    } as State

    componentDidMount() {
      this.fetchUsers()
    }

    async fetchUsers() {
      this.setState({ loading: true })

      try {
        const response = await fetch(API_URL)
        const data = await response.json()

        this.setState({ users: normalizeUsers(data.results) })
      } catch(e) {
        this.setState({ error: e.message })
      } finally {
        this.setState({ loading: false })
      }
    }

    onUserAdd = (user: User) => {

    }

    onUserRemove = (id: string) => {

    }

    render() {
      const { users, loading, error } = this.state

      if (loading) {
        return <div>Loading...</div>
      }
  
      if (error) {
        return <div>{error}</div>
      }

      return (
        <WrapperComponent users={users} onUserAdd={this.onUserAdd} onUserRemove={this.onUserRemove} {...this.props} />
      )
    }
  }

  return WithUsers
}

export default withUsers
