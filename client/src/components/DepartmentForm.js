import React, { Fragment, } from 'react';
import axios from 'axios';
import { Form, Header, } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  defaultValues = { name: "", department: {} };
  state = { ...this.defaultValues };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ name: res.data.name, department: res.data})
      })
  };

  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value })
  };

  handleSubmit= (e) => {
    e.preventDefault();
    if (this.props.match.params.id) {
      axios.put(`/api/departments/${this.props.match.params.id}`, { name: this.state.name, })
        .then( res => {
          this.props.history.goBack()
        })
    } else {
      axios.post("/api/departments", { name: this.state.name })
        .then( res => {
          this.props.history.push("/departments")
        })
    }
    this.setState({ ...this.defaultValues, });
  };

  render() {
    const { name, } = this.state;

    return (
      <Fragment>
        <Header>{this.props.match.params.id ? "Edit" : "New" } Department</Header>
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