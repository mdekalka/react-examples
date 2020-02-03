import React from "react"

import WrapperComponent from "../WrapperComponent"
import useUsers from "./useUsers"

export const Users = () => {
  const { loading, error, ...restProps} = useUsers("https://api.randomuser.me", 10)

  if (loading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <WrapperComponent {...restProps} title="users via hooks" />
  )
}
