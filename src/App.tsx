import React from 'react';
import './App.css';

import { UsersHOC, UsersParamsHOC } from "./components/HOCs/WrapperComponent"

const App = () => {
  return (
    <div className="App">
      <UsersHOC title="With users HOC" />
      <UsersParamsHOC title="with users params HOC" />
    </div>
  );
}

export default App;
