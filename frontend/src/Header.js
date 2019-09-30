import React from 'react';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem,InputGroup, InputGroupAddon, InputGroupText
  } from 'reactstrap';


const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';


export default function Header(){
        return(
            <header>
                <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
                    <NavbarBrand href="/">SNKRS PARADISE</NavbarBrand>
                        <Container>
                            <Nav  className="ml-auto" navbar tabs>
                            {/* <InputGroup>
                                <Input placeholder="Search New Releases"/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>Search</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup> */}
                            <Form inline>
                                <Input type="search" className="mr-3" placeholder="Search Newest"></Input>
                                <Button type="submit" color="info" outline>Search</Button>
                            </Form>
                            <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        BRAND
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            NIKE
                                        </DropdownItem>
                                        <DropdownItem>
                                            YEEZY
                                        </DropdownItem>

                                    </DropdownMenu>

                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink>NEWS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>LOGIN</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>SIGN UP</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>ABOUT</NavLink>
                                </NavItem>

                            </Nav>
                        </Container>
                </Navbar>
            </header>
        );
    
}

