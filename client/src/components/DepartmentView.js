import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { Button, Header, Card, } from 'semantic-ui-react';

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

  renderItem = (item) => (
    <Card>
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
          <Button as={Link} to="/departments/new">Edit</Button>
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