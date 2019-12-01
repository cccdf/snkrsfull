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
import { Row } from "react-bootstrap";
export default class Resetpwd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Form>
            {/* <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup> */}
            <FormGroup>
              <Label for="newPwd">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="please enter new password"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Row>
      </div>
    );
  }
}
