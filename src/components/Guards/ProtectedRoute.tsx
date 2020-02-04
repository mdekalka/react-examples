import React from "react"
import { Route, RouteProps } from "react-router-dom"

import { useAuth, TOP_SECRET } from "./useAuth"

interface Props {
  children?: React.ReactNode,
  redirect?: string
}

const ProtectedRoute = ({ children, ...rest }: Props & RouteProps) => {
  const { roles, isAuthenticated } = useAuth()

  return (
    <Route {...rest} render={() => {
      return isAuthenticated && roles.includes(TOP_SECRET)
        ? children
        : <div>Access denied. Please contact your administrator.</div>
    }} />
  )
}

export default ProtectedRoute
