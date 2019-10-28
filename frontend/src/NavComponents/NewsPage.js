import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row mb-3"></div>
        <h1>Today's news</h1>
      </div>
    );
  }
}
