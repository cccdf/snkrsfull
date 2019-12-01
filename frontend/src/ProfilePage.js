import React, { Fragment } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import FavBrand from "./FavBrand";

async function getUserInfo() {
  return axios
    .get("http://localhost:9000/users/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("cool-jwt")}` }
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    });
}

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log(localStorage.getItem("cool-jwt"));
    getUserInfo().then(data => {
      this.setState({ name: data.name, email: data.email, loading: false });
    });
    // console.log(res);
    // this.setState({ name: res.data, loading: false });
  }

  render() {
    return (
      <div>
        {/* <div classNeme="profile-navs" style={{ width: "15%" }}> */}
        <Row>
          <p>Hi! {this.state.name}</p>
          {/* <Nav vertical>
            <NavItem>
              <NavLink href="#">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Setting</NavLink>
            </NavItem>
          </Nav>
          <hr /> */}
        </Row>
        <Row>
          <p>
            Choose brand you like we will send an email to you if there are new
            released shoes
          </p>
        </Row>
        <Row>
          <FavBrand />
        </Row>
        <Row>
          <Button>Submit</Button>
        </Row>
        {/* <Row>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email: </Label>
              <span>{this.state.email}</span>
            </FormGroup>
            <a href="resetpwd">Click here to reset password</a> */}
        {/* <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup> */}
        {/* </Form>
        </Row> */}

        {/* </div> */}
      </div>
    );
  }
}
