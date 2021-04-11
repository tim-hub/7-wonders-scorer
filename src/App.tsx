import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Create2 from './pages/Create2';
import Create from './pages/Create';
import Header from './components/Header';
import { Box, Container } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Header/>
      <Container maxWidth="md">
        <Box m={1}>
          <Switch>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/create2">
              <Create2/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
