import React, { Fragment, } from 'react';
import Department from './Department';
import { Header, Card, } from 'semantic-ui-react';

const Home = () => (
  <Fragment>
    <Header as="h1">Rails React Department Store</Header>
    <hr />
    <Header as="h2">Departments</Header>
    <Card.Group>
      <Department />
    </Card.Group>
  </Fragment>
);

export default Home;