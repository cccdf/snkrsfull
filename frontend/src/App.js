import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import NikeSnkrs from "./NikeSnkrs";
import AdidasSnkrs from "./AdidasSnkrs";
import CarouselSnkrs from "./CarouselSnkrs";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NewsPage from "./NewsPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main id="main" className="my-5 py-5">
          <Container className="px-0">
            <Row
              noGutters
              className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
            >
              <Col offset="100">
                <CarouselSnkrs></CarouselSnkrs>
              </Col>
            </Row>
            <Row
              noGutters
              className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
            >
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <NikeSnkrs></NikeSnkrs>
              </Col>
              <Col
                xs={{ order: 3 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <AdidasSnkrs></AdidasSnkrs>
              </Col>
            </Row>
            <Row
              noGutters
              className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
            >
              <Footer></Footer>
            </Row>
          </Container>
        </main>
        <Router>
          <Switch>
            <Route path="/" exact={true} />
            <Route path="/news/">
              <NewsPage />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
