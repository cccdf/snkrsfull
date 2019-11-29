import React, { Fragment } from "react";

import axios from "axios";

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
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log(localStorage.getItem("cool-jwt"));
    getUserInfo().then(data => {
      this.setState({ name: data.name, loading: false });
    });
    // console.log(res);
    // this.setState({ name: res.data, loading: false });
  }

  render() {
    return (
      <div>
        <h1>Hi! {this.state.name}</h1>
      </div>
    );
  }
}
