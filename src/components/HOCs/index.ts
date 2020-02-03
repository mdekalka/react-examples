import withUsers from "./withUsers"
import withUsersParams from "./withUsersParams"
import WrapperComponent from "../WrapperComponent"

export const UsersHOC = withUsers(WrapperComponent)
export const UsersParamsHOC = withUsersParams({ url:"https://api.randomuser.me", resultCount: 5 })(WrapperComponent)
