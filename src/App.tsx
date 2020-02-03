import React from 'react';
import './App.css';

import { UsersHOC, UsersParamsHOC } from "./components/UsersHOC"
import { Users } from "./components/UsersRenderProps"
import { Users as UsersHooks } from "./components/UsersHook"

const App = () => {
  return (
    <div className="App">
      <UsersHOC title="With users HOC" />
      <UsersParamsHOC title="with users params HOC" />
      <hr/>
      <Users />
      <hr/>
      <UsersHooks />
    </div>
  );
}

export default App;
