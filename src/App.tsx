import React from 'react';
import './App.css';

import { UsersHOC } from "./components/HOCs/WrapperComponent"

const App = () => {
  return (
    <div className="App">
        <UsersHOC title="With users HOC" />
    </div>
  );
}

export default App;
