import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Header, } from 'semantic-ui-react';

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data })
      })
  };

  renderDepartment = (department) => (
    <Card as={Link} to={`/departments/${department.id}`}>
      <Card.Content>
        <Card.Header>{ department.name }</Card.Header>
      </Card.Content>
    </Card>
  );

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
                this.renderDepartment(department)
              ))
          }
        </Card.Group>
      </Fragment>
    );
  };
};

export default Departments;