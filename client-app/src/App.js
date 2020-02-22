import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Landing from './views/Landing';
import Pirates from './views/Pirates';


function App() {
  return (
    <div className="App">
      <Router>
        <Landing path="/" />
        <Pirates path="/pirates"/>
      </Router>
    </div>
  );
}

export default App;
