import React from "react"
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import ProtectedRoute from "./ProtectedRoute"
import { useAuth } from "./useAuth"
 
export const Guards = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/public">public link</Link></li>
        <li><Link to="/private">private link</Link></li>
        <li><Link to="/protected">protected link</Link></li>
      </ul>
      <Switch>
        <Route path="/public">
          <div>Public route</div>
        </Route>

        <PrivateRoute path="/private">
          <div>Private auth route</div>
        </PrivateRoute>

        <ProtectedRoute path="/protected">
          <div>Protected auth + roles route</div>
        </ProtectedRoute>
      </Switch>
    </Router>
  )
}
