import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { Button, Header, } from 'semantic-ui-react';

class Department extends React.Component {
  state = { department: {} };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data })
      })
  };

  render() {
    return (
      <Fragment>
          <Header as="h1">{ this.state.department.name }</Header>
          <Button as={Link} to="/departments/new">Edit</Button>
      </Fragment>
    );
  };
};

export default Department;