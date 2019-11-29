import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Header";

import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NewsPage from "./NewsPage";
import LoginPage from "./LoginPage";
import ChatRoom from "./ChatRoom";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

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
          <Router>
            <Switch>
              <Route path="/" exact={true}>
                <HomePage />
              </Route>
              <Route path="/news/" exact={true}>
                <NewsPage />
              </Route>
              <Route path="/chatroom/" exact={true}>
                <ChatRoom />
              </Route>
              <Route path="/login/" exact={true}>
                <LoginPage />
              </Route>
              <Route path="/signup/" exact={true}>
                <SignupPage />
              </Route>
              <Route path="/profile/" exact={true}>
                <ProfilePage />
              </Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </Router>
        </main>
      </Fragment>
    );
  }
}
