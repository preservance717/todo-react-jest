import React from 'react';
import { Grid } from '@material-ui/core';
import { ConnectedAddTodo } from "./redux-app/containers/ConnectedAddTodo";

import './App.css';

const App = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center"><h1>Todos</h1></Grid>
      <Grid container><ConnectedAddTodo /></Grid>
    </Grid>
  );
}

export default App;
