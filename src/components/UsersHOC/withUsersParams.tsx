import React from "react"

import { User, InjectedProps } from "../../typings/types"
import { normalizeUsers } from "../../utils"

interface State {
  users: User[]
  loading: boolean
  error: string | null
}

interface Options {
  url: string
  resultCount: number
}

// We can pass any options we want into the HOC, we also could pass it after <WrapperComponent>, but it's more clean way
const withUsersParams = (options: Options) => <P extends InjectedProps>(WrapperComponent: React.ComponentType<P>) => {
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
      const url = `${options.url}/?results=${options.resultCount}`

      try {
        const response = await fetch(url)
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
