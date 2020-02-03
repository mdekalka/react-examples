import React, { useState, useCallback, useEffect } from "react"

import { User } from "../../typings/types"
import { normalizeUsers } from "../../utils"

const useUsers = (url: string, resultCount: number) => {
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
  }, [])

  const onUserAdd = useCallback((user: User) => {
    setUsers(users => [...users, user])
  }, [])

  const onUserRemove = useCallback((userId: string) => {
    setUsers(users => users.filter(({ id }) => id !== userId ))
  }, [])

  return {
    users,
    loading,
    error,
    onUserAdd,
    onUserRemove
  }
}

export default useUsers
