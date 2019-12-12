import React, { Fragment, } from 'react';
import axios from 'axios';
import { Header, Form, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", };
  state = { ...this.defaultValues }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value});
  };

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/departments/${this.props.match.params.department_id}/items`, { ...this.state })
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.department_id}`)
      });
  };

  render() {
    const { name, price, description, } = this.state;

    return (
      <Fragment>
        <Header as="h1">Item Form</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Name"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            required
            value={name}
          />
          <Form.Input 
            label="Price"
            name="price"
            onChange={this.handleChange}
            placeholder="Price"
            required
            value={price}
          />
          <Form.Input 
            label="Description"
            name="description"
            onChange={this.handleChange}
            placeholder="Description"
            required
            value={description}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Fragment>
    );
  };
};

export default ItemForm;