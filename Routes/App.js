import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Router>
  );
}

export default App;


