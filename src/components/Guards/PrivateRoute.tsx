import React from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"

import { useAuth } from "./useAuth"

interface Props {
  children?: React.ReactNode,
  redirect?: string
}

const PrivateRoute = ({ children, redirect = "/login", ...rest }: Props & RouteProps) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route {...rest} render={({ location }) => {
      return isAuthenticated
        ? children
        : <Redirect to={{ pathname: redirect, state: { from: location } }} />
    }} />
  )
}

export default PrivateRoute
