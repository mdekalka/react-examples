import React from "react"
import { Switch, Route } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import ProtectedRoute from "./ProtectedRoute"

 
export const Guards = () => {
  <Switch>
    <Route path="/public">
      <div>Public route</div>
    </Route>

    <PrivateRoute path="private">
      <div>Private auth route</div>
    </PrivateRoute>

    <ProtectedRoute path="/protected">
      <div>Protected auth + roles route</div>
    </ProtectedRoute>
  </Switch>
}
