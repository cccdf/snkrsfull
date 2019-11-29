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

const AVATAR =
  "https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const jwt = getJwt();
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

                <NavItem>
                  <NavLink href="/signup/" activeClassName="active">
                    SIGN UP
                  </NavLink>
                </NavItem>
                {localStorage.getItem("cool-jwt") ? (
                  <NavItem>
                    <NavLink href="/profile/" activeClassName="active">
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
              </Nav>
            </Container>
          </Navbar>
        </Router>
      </header>
    );
  }
}
