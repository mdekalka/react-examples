import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom"

import { UsersHOC, UsersParamsHOC } from "./components/UsersHOC"
import { Users as UsersRenderProps } from "./components/UsersRenderProps"
import { Users as UsersHooks } from "./components/UsersHook"
import { WithHookContext } from "./components/WithHookContext"
import { Guards } from "./components/Guards"

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="nav-list">
          <li><Link className="nav-link" to="/hoc">Users HOC</Link></li>
          <li><Link className="nav-link" to="/params-hoc">Users params HOC</Link></li>
          <li><Link className="nav-link" to="/render-props">Users render props</Link></li>
          <li><Link className="nav-link" to="/hooks">Users hooks</Link></li>
          <li><Link className="nav-link" to="/context-hook">Context hook</Link></li>
          <li><Link className="nav-link" to="/route-guards">Route guards</Link></li>
        </ul>
        <Switch>
          <Route path="/hoc">
            <UsersHOC title="With users HOC" />
          </Route>

          <Route path="/params-hoc">
            <UsersParamsHOC title="with users params HOC" />
          </Route>

          <Route path="/render-props">
            <UsersRenderProps />
          </Route>

          <Route path="/hooks">
            <UsersHooks />
          </Route>

          <Route path="/context-hook">
            <WithHookContext />
          </Route>

          <Route path="/route-guards">
            <Guards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
