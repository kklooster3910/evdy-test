import React from 'react';
import { Switch } from 'react-router-dom';
import MemorialIndex from './memorials/memorial_container'
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <div className='main-app'>
    <Switch>
      <MemorialIndex path='/' component={MemorialIndex} />
    </Switch>
  </div>
);


export default App;
