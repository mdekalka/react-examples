import { useState } from "react"

export const TOP_SECRET = "SECRET_PERMISSIONS"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [roles, setRoles] = useState(TOP_SECRET)

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

  return {
    isAuthenticated,
    roles,
    authenticate,
    deny
  }
}
