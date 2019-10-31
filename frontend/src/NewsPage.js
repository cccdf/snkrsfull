import React, { Fragment } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
// import getNewsApi from "./getNewsApi";

async function getNewsApi() {
  let response = await fetch("http://localhost:9000/news");
  let results = await response.json();
  return results;
}

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      tweets: [],
      loading: false
    };
  }

  async componentDidMount() {
    let response = await getNewsApi();
    let tweets = [];
    response.map(result => {
      tweets.push(result.tweet);
    });
    this.setState({ results: response, tweets: tweets, loading: false });
  }

  render() {
    return (
      <Fragment>
        <ListGroup>
          {/* {this.state.tweets.map(tweet => {
            <ListGroupItem>
              <p>{tweet.id}</p>
            </ListGroupItem>;
          })} */}
          {this.state.results.map(result => {
            return (
              <ListGroupItem>
                <p>{result.tweet}</p>

                <img src={result.photos} width="200"></img>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Fragment>
    );
  }
}
