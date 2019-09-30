import React, {Fragment} from 'react';
import getNikeApi from './getNikeApi';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class NikeSnkrs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        results: [],
    }
  }

  async componentDidMount(){
    let response = await getNikeApi();
    this.setState({results: response, loading: false});
    
    
  }

   
  render(){
      return(
          <Fragment>
            <h1>Nike</h1>
            <ListGroup>
                {this.state.results.map((result) => {
                    return(
                        <ListGroupItem>
                        <a href={result.product_link}>
                            {result.title}
                        </a>
                        <p>Price:{result.price}</p>
                        {/* <p>Release Time!</p> */}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
          </Fragment>
      );
  }
}