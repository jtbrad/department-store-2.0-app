import React, { Fragment, } from 'react';
import axios from 'axios';
import Department from './Department';
import { Header, Card, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data })
      })
  };
  
  render() {
    return (
      <Fragment>
        <Header as="h1">Rails React Department Store</Header>
        <hr />
        <Header as="h2">Departments</Header>
        <Card.Group>
          <Department />
        </Card.Group>
      </Fragment>
    );
  };
};

export default Home;