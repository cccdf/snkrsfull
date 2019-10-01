import React, {Fragment} from 'react';
import { ListGroup, ListGroupItem, Collapse, Button } from 'reactstrap';

export default class NikeSnkrs extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        results: [],
        collapse: false
    }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

 

   
  render(){
      return(
          <Fragment>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Adidas</Button>
            <Collapse isOpen={this.state.collapse}>
              <ListGroup>
                  <ListGroupItem>Need data</ListGroupItem>
                
              </ListGroup>
            </Collapse>
          </Fragment>
      );
  }
}

