import React, { Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit} className="FormFields">
        <FormGroup controlId="confirmationCode" bsSize="small">
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="Email"
            value={this.state.email}
            placeholder="enter email address"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            id="Password"
            placeholder="enter password"
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button>Submit</Button>
      </form>
    );
  };
  render() {
    return <div>{this.renderForm()}</div>;
  }
}
