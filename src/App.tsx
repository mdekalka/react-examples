import React from 'react';
import './App.css';

import { UsersHOC, UsersParamsHOC } from "./components/HOCs"
import { Users } from "./components/RenderProps"

const App = () => {
  return (
    <div className="App">
      {/* <UsersHOC title="With users HOC" />
      <UsersParamsHOC title="with users params HOC" /> */}
      <hr/>
      <Users />
    </div>
  );
}

export default App;
