import React, { Fragment, useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export default class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      hasAgreed: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    // const [newUser, setNewUser] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
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

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }
  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit} className="FormFields">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <FormGroup>
              <Label for="exampleEmail">Full Name</Label>
              <Input
                type="text"
                name="name"
                id="Email"
                value={this.state.name}
                placeholder="enter name"
                onChange={this.handleChange}
                // style={{ height: 5 }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <FormGroup>
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
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
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
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <FormGroup>
              <Label for="password">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                id="confirmPassword"
                placeholder="confirm password"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Button disabled={!this.validateForm()}>Submit</Button>
          </Col>
          <Col>
            <Link to="/login" className="FormField__Link">
              I'm already member
            </Link>
          </Col>
        </Row>
      </form>
    );
  };

  render() {
    return (
      <div className="SignUp">
        {this.renderForm()}
        {/* {newUser === null ? renderForm() : renderConfirmationForm()} */}
        {/* <h1>SignupPage</h1> */}
      </div>
    );
  }
}
