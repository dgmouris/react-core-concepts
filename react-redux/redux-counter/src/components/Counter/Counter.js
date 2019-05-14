import React from 'react';
import Button from "../ui/Button/Button"
import './counter.css';

const Counter = (props)=>{    
     
        return (
            <aside className="counter">
            <header className="counter-id">
            <p>Counter ID: {props.id} <span>index:  {props.index}</span></p>
            <button onClick={()=>props.removeCounter(props.index)} index={props.id}>x</button></header>
                <div className="count">{props.count}</div>
                <footer className="counter-controls">
                    <Button className="count-btn"  onClickHandler={()=>props.updateCount(props.index, -1)} name="-"/> 
                    <Button  className="count-btn" onClickHandler={()=>props.updateCount(props.index,+1)} name="+"/> 
                </footer>
            </aside>
        );
    
}

export default Counter;