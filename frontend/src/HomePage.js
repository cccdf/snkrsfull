import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import NikeSnkrs from "./NikeSnkrs";
import AdidasSnkrs from "./AdidasSnkrs";
import CarouselSnkrs from "./CarouselSnkrs";
import "./HomePage.css";

async function getNikeApi() {
  let response = await fetch("https://snkr-news-api.herokuapp.com/nike");
  let results = await response.json();
  return results;
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  async componentDidMount() {
    let response = await getNikeApi();

    this.setState({
      results: response,
      loading: false
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div
            className="column"
            style={{ width: "70%", justifyContent: "left" }}
          >
            <h3>Popular brand</h3>
          </div>
          <div className="column" style={{ float: "right" }}>
            <a href="#">See All</a>
          </div>
        </div>
        <div className="row" style={{ height: 200 }}>
          <div className="column" style={{ backgroundColor: "#aaa" }}>
            <p>Air Jordan</p>
          </div>
          <div className="column" style={{ backgroundColor: "#bbb" }}>
            <p>Nike</p>
          </div>
          <div className="column" style={{ backgroundColor: "#ccc" }}>
            <p>Yeezy</p>
          </div>
          <div className="column" style={{ backgroundColor: "#ddd" }}>
            <p>Adidas</p>
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            style={{ width: "70%", justifyContent: "left" }}
          >
            <h3>Coming Soon</h3>
          </div>
          <div className="column" style={{ float: "right" }}>
            <a href="#">See All</a>
          </div>
        </div>
        <div className="row" style={{ height: 200 }}>
          <div className="column" style={{ backgroundColor: "#aaa" }}>
            <p>Air Jordan</p>
          </div>
          <div className="column" style={{ backgroundColor: "#bbb" }}>
            <p>Nike</p>
          </div>
          <div className="column" style={{ backgroundColor: "#ccc" }}>
            <p>Yeezy</p>
          </div>
          <div className="column" style={{ backgroundColor: "#ddd" }}>
            <p>Adidas</p>
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            style={{ width: "70%", justifyContent: "left" }}
          >
            <h3>Recently Released</h3>
          </div>
          <div className="column" style={{ float: "right" }}>
            <a href="#">See All</a>
          </div>
        </div>
        <div className="row" style={{ height: 200 }}>
          {this.state.results.map(result => {
            return (
              <div className="infocard" style={{ backgroundColor: "#aaa" }}>
                <p>Image</p>
                <div className="title">
                  <a href={result.product_link}>{result.title}</a>
                </div>
                <div className="price">
                  <p>Price:{result.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <CarouselSnkrs></CarouselSnkrs>
        </div>
        <div className="row" style={{ backgroundColor: "#ddd", height: 100 }}>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
