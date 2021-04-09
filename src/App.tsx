import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Create2 from './pages/Create2';
import Create from './pages/Create';

function App() {
  return (
    <>
      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/create2">
            <Create2/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </Router>
    </>

  );
}

export default App;
