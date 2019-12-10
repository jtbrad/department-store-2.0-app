import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import Department from './Department';
import { Button, Card, Header, } from 'semantic-ui-react';

class Departments extends React.Component {
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
        <Header as="h1">Departments</Header>
        <Button as={Link} to="/departments/new">Add New Department</Button>
        <br />
        <br />
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

export default Departments;