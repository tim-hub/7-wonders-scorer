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
import { Box, Container, Grid } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Header/>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
          <Box m={2}>
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
      </Grid>
    </Router>
  );
}

export default App;
