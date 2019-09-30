import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
import Container from "react-bootstrap/Container";
import './App.css';
import Header from "./Header";
import getNikeApi from './getNikeApi'
import NikeSnkrs from './NikeSnkrs';
import { Row, Col } from 'react-bootstrap';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  


  render(){
    return(
     <Fragment>
       <Header />
         <main className="my-5 py-5">
           <Container className="px-0">
             <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
               <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                <NikeSnkrs></NikeSnkrs>
               </Col>
             </Row>
           </Container>
         </main>

     </Fragment>
       
      

      

    );
  }


}