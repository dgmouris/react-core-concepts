import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
 
 const Card = styled.aside`
     background:tomato;
     width:320px;
     height:500px;
     padding:1.5rem;
 `
 const CardContents=styled.div`
       background:green;
       width:320px;
       height:320px;
 `

class Anima extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appearHome:true
         };
    }
    componentDidMount() {
        console.log("up and at tem")
    }
    showUp = ()=>{
        this.setState({
            appearHome: !this.state.appearHome
        })
        console.log("appear home" + this.state.appearHome)
    }
   
    render() {
        const {appearHome} = this.state;
        return (
         
            <Card>
                <header>Name</header>
                
                <CSSTransition
            in={appearHome}
            appear={true} 
            timeout={2600} 
            classNames="fade"
            key={Date.now()}
           >
                <CardContents></CardContents>
                </CSSTransition> 
                <button onClick={this.showUp} > Appear: {`${ appearHome}`}</button>
            </Card>
            
        );
    }
}

export default Anima;
 