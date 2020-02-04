import React from 'react';
import './App.css';

import { UsersHOC, UsersParamsHOC } from "./components/UsersHOC"
import { Users } from "./components/UsersRenderProps"
import { Users as UsersHooks } from "./components/UsersHook"
import { WithHookContext } from "./components/WithHookContext"
import { Guards } from "./components/Guards"

const App = () => {
  return (
    <div className="App">
      <UsersHOC title="With users HOC" />
      <UsersParamsHOC title="with users params HOC" />
      <hr/>
      <Users />
      <hr/>
      <UsersHooks />
      <hr/>
      <WithHookContext />
      <hr/>
      <Guards />
    </div>
  );
}

export default App;
