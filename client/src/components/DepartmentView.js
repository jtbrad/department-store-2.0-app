import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { Button, Header, Card, } from 'semantic-ui-react';
import StyledButton from '../styles/StyledButton';

class Department extends React.Component {
  state = { department: {}, items: [], };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data })
      })
    axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then( res => {
        this.setState({ items: res.data })
      })
  };

  handleDelete = () => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.props.history.push("/departments")
      })
  };

  renderItem = (item) => (
    <Card as={Link} to={`/departments/${this.state.department.id}/items/${item.id}`}>
      <Card.Content>
        <Card.Header>{ item.name }</Card.Header>
        <Card.Meta>{ item.description }</Card.Meta>
      </Card.Content>
    </Card>
  );
  
  render() {
    return (
      <Fragment>
          <Header as="h1">{ this.state.department.name }</Header>
          <StyledButton as={Link} to={`/departments/${this.state.department.id}/items/new`}>Add New Item</StyledButton>
          <StyledButton type="edit" as={Link} to={`/departments/${this.state.department.id}/edit`}>Edit</StyledButton>
          <StyledButton type="delete" onClick={this.handleDelete}>Delete</StyledButton>
          <br />
          <br />
          <Card.Group>
            {
              this.state.items.map( item => (
                this.renderItem(item)
              ))
            }
          </Card.Group>
      </Fragment>
    );
  };
};

export default Department;