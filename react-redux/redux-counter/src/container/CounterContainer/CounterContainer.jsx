import React, { Component } from "react";
import Counter from "../../components/Counter";
import Button from "../../components/ui/Button/Button";
import randomBytes from "randombytes";
import { connect } from "react-redux";
import {
  addCounter,
  removeCounter,
  updateCount
} from "../../redux/actions/actions";
import "./container.css";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: [] };
  }
  addCounter = () => {
    const uniqueID = randomBytes(6).toString("hex");
    this.props.dispatch(addCounter({ id: uniqueID, count: 0 }));
  };

  removeCounter = index => {
    this.props.dispatch(removeCounter(index));
  };
  updateCount = (index, value) => {
    console.log(index, value);
    this.props.dispatch(updateCount({ index, value }));
  };
  render() {
    return (
      <aside className="counters">
        <header className="counters-header">
          <h2>React Redux Multiple Counter Example</h2>
        </header>
        <div className="display-counters">
          {this.props.counters.map((item, index) => (
            <Counter
              key={item.id}
              id={item.id}
              index={index}
              removeCounter={this.removeCounter}
              count={item.count}
              updateCount={this.updateCount}
            />
          ))}
        </div>
        <footer>
          <Button onClickHandler={this.addCounter} name="add counter" />
        </footer>
      </aside>
    );
  }
}
const mapStateToProps = state => {
  return { counters: state.counters };
};
export default connect(mapStateToProps)(CounterContainer);
