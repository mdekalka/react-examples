import React from "react"

import WithUsers from "./WithUsers"
import WrapperComponent from "../WrapperComponent"

export const Users = () => {
  return (
    <WithUsers url={"https://api.randomuser.me"} resultCount={5}>
      {(props) => <WrapperComponent title="render props" {...props} />}
    </WithUsers>
  )
}
