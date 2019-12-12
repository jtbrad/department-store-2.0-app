import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
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
        <HeaderStyle fSize="name">{this.state.item.name} </HeaderStyle>
        <HeaderStyle fSize="price">${ this.state.item.price }</HeaderStyle>
        <HeaderStyle>{ this.state.item.description }</HeaderStyle>
        <Button as={Link} to={`/departments/${this.state.item.department_id}`}>Back</Button>
      </Fragment>
    );
  };
};

const fontSize = (type) => {
  switch(type) {
    case "name":
      return "40px"
    case "price":
      return "30px"
    default:
      return "18px"
  }
};

const HeaderStyle = styled.h1`
  text-align: center;
  font-size: ${props => fontSize(props.fSize)};
`;

export default ItemView;