import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  UncontrolledAlert
} from "reactstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import FavBrand from "./FavBrand";
import { Redirect } from "react-router-dom";

async function getUserInfo() {
  return axios
    .get("http://localhost:9000/users/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("cool-jwt")}` }
    })
    .then(res => {
      // const brands = getUserFav(res.data.email);
      console.log(res.data);
      return res.data;
    });
}

async function getUserFav(email) {
  return axios
    .post("http://localhost:9000/users/favoritebrands/search", { email: email })
    .then(res => {
      console.log(res);
      console.log(typeof res.data);
      // if (res.data.length === 0) {
      //   axios.post("http://localhost:9000/users/favoritebrands", {
      //     email: email,
      //     brands: " "
      //   });
      // }
      if (res.data[0]) {
        return res.data[0].brands;
      } else {
        return res.data.brands;
      }
    });
}

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      brands: [],
      send: false,
      redirect: false,
      loading: true
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.sendPut = this.sendPut.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log(localStorage.getItem("cool-jwt"));
    getUserInfo().then(data => {
      console.log(data);

      this.setState({
        name: data.name,
        email: data.email,

        loading: false
      });
      getUserFav(data.email).then(brands => {
        this.setState({ brands });
      });
    });
  }
  addItem(e) {
    e.preventDefault();
    let brandsArr = this.state.brands;
    console.log(e.target.innerText);
    let brand = e.target.innerText;
    if (brandsArr.indexOf(brand) === -1) {
      brandsArr.push(brand);

      this.setState({ brands: brandsArr });
    }
  }
  deleteItem(e) {
    e.preventDefault();
    let filter = this.state.brands.filter(value => {
      return (
        value !==
        e.target.parentNode.innerText.substring(
          0,
          e.target.parentNode.innerText.indexOf("delete")
        )
      );
    });
    this.setState({ brands: filter });
  }

  sendPut(e) {
    e.preventDefault();
    this.setState({ send: false });
    axios
      .put("http://localhost:9000/users/favoritebrands", {
        email: this.state.email,
        brands: this.state.brands
      })
      .then(res => {
        if (res.status === 201) {
          this.setState({ send: true });
        }
        console.log(res.status);
      });
  }

  deleteAccount(e) {
    e.preventDefault();
    axios
      .delete("http://localhost:9000/users/delete", {
        email: this.state.email
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ name: "", email: "", brands: [], redirect: true });
          localStorage.removeItem("cool-jwt");
        }
        console.log(res.status);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {/* <div classNeme="profile-navs" style={{ width: "15%" }}> */}
        {this.state.send ? (
          <UncontrolledAlert color="info">
            Update successfully
          </UncontrolledAlert>
        ) : null}
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
          <Button onClick={this.deleteAccount}>Delete your account</Button>
        </Row>
        <Row>
          <p>Brands you like:</p>
          {this.state.brands ? (
            <ul>
              {Object.values(this.state.brands).map(brand => {
                return (
                  <li>
                    {brand}
                    <button onClick={this.deleteItem}>delete</button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </Row>
        <Row>
          <p>
            Choose brand you like we will send an email to you if there are new
            released shoes
          </p>
        </Row>
        <Row>
          {/* <FavBrand /> */}
          <Col xs="3">
            <Button onClick={this.addItem}>Nike</Button>
          </Col>
          <Col>
            <Button onClick={this.addItem}>Adidas</Button>
          </Col>
          <Col>
            <Button onClick={this.addItem}>Air Jordan</Button>
          </Col>
          <Col>
            <Button onClick={this.addItem}>Yeezy</Button>
          </Col>
        </Row>
        <Row>
          <Button onClick={this.sendPut}>Submit</Button>
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
