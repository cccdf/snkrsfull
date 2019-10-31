import React, { Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Row, Col } from "react-bootstrap";

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
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <FormGroup controlId="confirmationCode" bsSize="small">
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="email"
                id="Email"
                value={this.state.email}
                placeholder="enter email address"
                onChange={this.handleChange}
                bsSize="small"
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
            <Button>Submit</Button>
          </Col>
        </Row>
      </form>
    );
  };
  render() {
    return <div>{this.renderForm()}</div>;
  }
}
