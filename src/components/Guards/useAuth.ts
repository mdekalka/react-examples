import { useState } from "react"

export const TOP_SECRET = "SECRET_PERMISSIONS"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [roles, setRoles] = useState("asfd")

  const authenticate = () => {
    setTimeout(() => {
      setIsAuthenticated(true)
    }, 2000)
  }

  const deny = () => {
    setTimeout(() => {
      setIsAuthenticated(false)
    }, 2000)
  }

  const resetRole = () => setRoles("")

  return {
    isAuthenticated,
    roles,
    authenticate,
    deny,
    resetRole
  }
}
