import React, { Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
//redirect and signup redirect
const API = "https://snkr-news-api.herokuapp.com";

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

  async handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token);
        localStorage.setItem("cool-jwt", res.data.token);
      });
    this.setState({ redirectToPostsPage: true });
    // await fetch(`${API}/users/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // }).then(res => {
    //   console.log(res);
    //   if (res.status === 200) {
    //     alert("Login successfully");
    //     console.log("Login successfully");
    //   } else if (res.status === 204) {
    //     alert("Password doesn't match");
    //     console.log("Password doesn't match");
    //   } else {
    //     alert("Username does not exist");
    //     console.log("Email is not registered");
    //   }
    // });
    // console.log("The form was submitted with the following data:");
    // console.log(this.state);
    // this.setState({ redirectToPostsPage: true });
  }
  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit} className="FormFields">
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
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
          <Col md={{ span: 6, offset: 0 }}>
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
          <Col md={{ span: 6, offset: 0 }}>
            <Button>Submit</Button>
          </Col>
        </Row>
      </form>
    );
  };
  render() {
    if (this.state.redirectToPostsPage) {
      return <Redirect to="/" />;
    }
    return <div>{this.renderForm()}</div>;
  }
}
