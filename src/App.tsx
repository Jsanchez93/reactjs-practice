import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { E404 } from './pages/Errors';
import { Menu } from './components/Menu';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <section id="main">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
          <Route component={E404} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
