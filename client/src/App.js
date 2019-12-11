//To Do
//Add delete functionality to departments
//Add view, create, edit, and delete functionality to items

import React, { Fragment, } from 'react';
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm';
import DepartmentView from './components/DepartmentView';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:id/edit" component={DepartmentForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>

);

export default App;
