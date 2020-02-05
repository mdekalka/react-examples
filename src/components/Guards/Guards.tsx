import React from "react"
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import ProtectedRoute from "./ProtectedRoute"
import GuardRoutes from "./GuardRoutes"
 
export const Guards = () => {
  const handleGuardRoute = async () => {
    // you can handle sync/async fns to get your auth state and then call next with boolean value
    const isAuth: boolean = await new Promise((resolve) => setTimeout(() => resolve(true), 2000))

    return isAuth
  }

  return (
    <Router>
      <ul>
        <li><Link to="/public">public link</Link></li>
        <li><Link to="/private">private link</Link></li>
        <li><Link to="/protected">protected link</Link></li>

        <li><Link to="/route1">guard route one </Link></li>
        <li><Link to="/route2">guard route two</Link></li>
        <li><Link to="/route3">guard route three</Link></li>
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

        <GuardRoutes guard={handleGuardRoute}>
          <Route path="/route1">
            <div>Route one</div>
          </Route>
          <Route path="/route2">
            <div>Route two</div>
          </Route>
          <Route path="/route3">
            <div>Route three</div>
          </Route>
        </GuardRoutes>
      </Switch>
    </Router>
  )
}
