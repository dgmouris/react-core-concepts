import React, { Component } from 'react'




export default class Amount extends Component {


  render() {
    const { children } = this.props;
    const name = "jimo foley"
    const age = "kathleen foley"

    return (
      <aside className="currency-convertor">
        <header><h1>Currency Convertor</h1></header>
        {this.props.children(name, age)}
      </aside >
    )
  }
}


