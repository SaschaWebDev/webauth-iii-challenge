import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <header>
        <h2> Navbar Soon</h2>
      </header>
      <main>
        <h2>Frontend Sprint 13 Lecture 3 Challenge</h2>
        <Switch>
          <Route exact path='/' />
          <Route path='/signup' render={props => <SignUp {...props} />} />
          <Route path='/signin' />
          <Route path='/users' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
