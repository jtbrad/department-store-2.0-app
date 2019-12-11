import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { Button, Header, } from 'semantic-ui-react';

class ItemView extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ item: res.data })
      });
  };

  render() {
    return (
      <Fragment>
        <Header as="h1">{this.state.item.name}</Header>
        <Header as="h2">${ this.state.item.price }</Header>
        <Header as="p">{ this.state.item.description }</Header>
        <Button as={Link} to={`/departments/${this.state.item.department_id}`}>Back</Button>
      </Fragment>
    );
  };
};

export default ItemView;