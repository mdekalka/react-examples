import React, { useEffect, useState, useCallback } from "react"

import { User } from "../../typings/types"
import { normalizeUsers } from "../../utils"

interface State {
  users: User[]
  onUserAdd: (user: User) => void
  onUserRemove: (id: string) => void
}

interface Props {
  url: string
  resultCount: number
  children: (state: State) => React.ReactElement
}

const WithUsers = ({ url, resultCount, children }: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)

      try {
        const response = await fetch(`${url}/?results=${resultCount}`)
        const data = await response.json()
        const users = normalizeUsers(data.results)

        setUsers(users)
      } catch(e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [url, resultCount])

  const onUserAdd = useCallback((user: User) => {
    setUsers(users => [...users, user])
  }, [])

  const onUserRemove = useCallback((userId: string) => {
    setUsers(users => users.filter(({ id }) => id !== userId ))
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  const state: State = {
    users,
    onUserAdd,
    onUserRemove
  }

  return (
    <>
      {children(state)}
    </>
  )
}

export default WithUsers
