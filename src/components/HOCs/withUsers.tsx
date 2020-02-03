import React from "react"

import { User } from "../../typings/types"
import { normalizeUsers } from "../../utils"

const API_URL = "https://api.randomuser.me/?results=10"

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

const withUsers = <P extends InjectedProps>(WrapperComponent: React.ComponentType<P>) => {
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

export default withUsers
