import React from 'react';
import axios from 'axios';
import { Header, } from 'semantic-ui-react';

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
      <Header as="h1">{ this.state.department.name }</Header>
    );
  };
};

export default Department;