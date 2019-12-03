import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import NewsPage from "./NewsPage";
import { getJwt } from "./helpers/jwt";
import axios from "axios";

const AVATAR =
  "https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg";

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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.localStorageUpdated = this.localStorageUpdated.bind(this);
    this.state = {
      name: "",
      email: "",
      status: null
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({
        status: localStorage.getItem("cool-jwt") ? true : false
      });
      if (localStorage.getItem("cool-jwt")) {
        getUserInfo().then(data => {
          this.setState({ name: data.name, email: data.email });
        });
      }
      window.addEventListener("storage", this.localStorageUpdated);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", this.localStorageUpdated);
    }
  }

  localStorageUpdated() {
    if (!localStorage.getItem("cool-jwt")) {
      this.updateState(false);
    } else if (!this.state.status) {
      this.updateState(true);
    }
  }
  updateState(value) {
    this.setState({ status: value });
  }

  logout() {
    localStorage.removeItem("cool-jwt");
  }

  render() {
    return (
      <header>
        <Router>
          <Navbar
            fixed="top"
            color="light"
            light
            expand="xs"
            className="border-bottom border-gray bg-white"
            style={{ height: 80 }}
          >
            <NavbarBrand href="/">SNKRS PARADISE</NavbarBrand>
            <Container>
              <Nav className="ml-auto" navbar tabs>
                <Form inline>
                  <Input
                    type="search"
                    className="mr-3"
                    placeholder="Search Newest"
                  ></Input>
                  <Button type="submit" color="info" outline>
                    Search
                  </Button>
                </Form>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    BRAND
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>NIKE</DropdownItem>
                    <DropdownItem>YEEZY</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/news/">NEWS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/chatroom/">CHATROOM</NavLink>
                </NavItem>

                {localStorage.getItem("cool-jwt") ? null : (
                  <NavItem>
                    <NavLink href="/signup/" activeClassName="active">
                      SIGN UP
                    </NavLink>
                  </NavItem>
                )}

                {localStorage.getItem("cool-jwt") ? (
                  <NavItem>
                    <NavLink
                      href={`/profile/${this.state.name}`}
                      // to={`/profile/${this.state.name}`}
                      activeClassName="active"
                    >
                      PROFILE
                    </NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavLink href="/login/" activeClassName="active">
                      LOGIN
                    </NavLink>
                  </NavItem>
                )}
                {localStorage.getItem("cool-jwt") ? (
                  <NavItem>
                    <NavLink href="/" onClick={this.logout}>
                      LOGOUT
                    </NavLink>
                  </NavItem>
                ) : null}
              </Nav>
            </Container>
          </Navbar>
        </Router>
      </header>
    );
  }
}
