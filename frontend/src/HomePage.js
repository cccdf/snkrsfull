import React, { Fragment } from "react";
import { Spinner } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import NikeSnkrs from "./NikeSnkrs";
import AdidasSnkrs from "./AdidasSnkrs";
import CarouselSnkrs from "./CarouselSnkrs";
import "./HomePage.css";
import adidas from "./img/adidas.jpg";
import aj from "./img/aj.jpg";
import nike from "./img/nike.jpg";
import yeezy from "./img/yeezy.jpg";

async function getNikeApi() {
  let response = await fetch("https://snkr-news-api.herokuapp.com/nike");
  let results = await response.json();
  return results;
}

async function getUpComingApi() {
  let response = await fetch("https://snkr-news-api.herokuapp.com/upcoming");
  let results = await response.json();
  return results;
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      upcomings: [],
      loading: true
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let upcomings = await getUpComingApi();
    let response = await getNikeApi();
    this.setState({
      results: response,
      upcomings: upcomings,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <Spinner color="primary" />
        </div>
      );
    } else {
      return (
        <div>
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
          <div className="row" style={{ height: 260 }}>
            {this.state.upcomings.map(upcoming => {
              return (
                <div className="infocard">
                  <img
                    width="200"
                    height="200"
                    className="shoesimage"
                    src={upcoming.img_link}
                  ></img>
                  <div className="title" style={{ bottom: "5%" }}>
                    <a href={upcoming.product_link}>{upcoming.title[1]}</a>
                  </div>
                  <div className="time">
                    <p>{upcoming.time}</p>
                  </div>
                </div>
              );
            })}
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
          <div className="row" style={{ height: 260 }}>
            {this.state.results.map(result => {
              return (
                <div className="infocard">
                  <img
                    width="200"
                    height="200"
                    className="shoesimage"
                    src={result.img_link}
                  ></img>
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
          <div className="row" style={{ height: 260 }}>
            <div className="column" style={{ backgroundColor: "white" }}>
              {/* <p>Air Jordan</p> */}
              <a href="#">
                <img src={aj}></img>
              </a>
            </div>
            <div className="column">
              <a href="/">
                <img src={nike}></img>
              </a>
            </div>
            <div className="column">
              <a href="/">
                <img src={yeezy}></img>
              </a>
            </div>
            <div className="column">
              <a href="/">
                <img src={adidas}></img>
              </a>
            </div>
          </div>
          <div className="row">
            <CarouselSnkrs></CarouselSnkrs>
          </div>
          <div
            className="site-footer"
            style={{ backgroundColor: "#ddd", height: 200 }}
          >
            <Footer></Footer>
          </div>
        </div>
      );
    }
  }
}
