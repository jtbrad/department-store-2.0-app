import React, { Fragment, } from 'react';
import axios from 'axios';
import { Form, Header, } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  defaultValues = { name: "", };
  state = { ...this.defaultValues };

  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value })
  };

  handleSubmit= (e) => {
    e.preventDefault();
    axios.post("/api/departments", { ...this.state, })
      .then( res => {
        this.props.history.push("/departments")
      })
    this.setState({ ...this.defaultValues, });
  };

  render() {
    const { name, } = this.state;

    return (
      <Fragment>
        <Header>New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Name"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            required
            value={name}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Fragment>
    );
  };
};

export default DepartmentForm;