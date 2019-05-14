import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addProduct} from 'store/actions/actions'


class ViewChore extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

 
    render() {
        return (
           
            <div>
              {this.props.products.map((item, index)=>  
              <div key={index} index={index}>
                      <p>date added: {item.postedOn}</p>
                      <p>id: {item.id}</p>
                      <p>type: {item.type}</p>
                      <p>description: {item.description}</p>
                      <p>add by: {item.addBy}</p>
                      <button onClick={() => this.props.onNewChore()}>dispatch an action</button>
              </div>               
          
       
               )}
            </div>
        );
    }
}
const mapStateToProps = storeState =>{
    return {
        products: storeState.chores
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onNewChore: () => dispatch(addProduct({ id:"jim" }))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewChore);