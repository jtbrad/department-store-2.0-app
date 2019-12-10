import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>

);

export default App;
