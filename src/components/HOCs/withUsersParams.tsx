import React from "react"

const API_URL = "https://api.randomuser.me/?results=10"

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

const withUsersParams = <P extends InjectedProps>(WrapperComponent: React.ComponentType<P>) => {
  class WithUsers extends React.Component<Subtract<P, InjectedProps>, State> {
    state: State = {
      users: [],
      loading: false,
      error: null
    }

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
      this.setState(prevState => ({ ...prevState, users: [...prevState.users, user] }))
    }

    onUserRemove = (userId: string) => {
      const { users } = this.state
      const remainingUsers = users.filter(({ id }) => id !== userId )

      this.setState({ users: remainingUsers })
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
        <WrapperComponent {...this.props as P} users={users} onUserAdd={this.onUserAdd} onUserRemove={this.onUserRemove} />
      )
    }
  }

  return WithUsers
}

export default withUsersParams
