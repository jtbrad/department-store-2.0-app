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
    const { departments, } = this.state;

    return (
      <Fragment>
        <Header as="h1">Rails React Department Store</Header>
        <hr />
        <Header as="h2">Departments</Header>
        <Card.Group>
          {
            departments.length <= 0 ?
              <Header as="h2">No Departments</Header>
            :
              departments.map( department => (
                <Department key={department.id} department={department} />
              ))
          }
        </Card.Group>
      </Fragment>
    );
  };
};

export default Home;