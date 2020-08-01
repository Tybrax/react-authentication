import React from 'react';
import './App.css';

import { SignUp } from './components/SignUp.js';
import { SignIn } from './components/SignIn.js';

function App() {
  return (
        <div className="App">
          <div>
            <h1>SIGN UP</h1>
            <SignUp />
          </div>
          <div>
            <h1>SIGN IN</h1>
            <SignIn />
          </div>
        </div>
  );
}

export default App;
