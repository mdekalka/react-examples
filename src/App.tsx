import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom"

import { navigationSchema } from "./navigationSchema"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="nav-list">
          {navigationSchema.map(({ path, pathTitle }) => (
            <li><Link className="nav-link" to={path}>{pathTitle}</Link></li>
          ))}
        </ul>
        <Switch>
          {navigationSchema.map(({ path, component }) => {
            const Component: any = component

            return (
              <Route path={path}>
                <Component />
              </Route>
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
