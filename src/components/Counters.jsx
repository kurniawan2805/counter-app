import React, { Component } from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

class Counters extends Component {
  state = {
    item: [],
    price: 1000
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const dataCounter = this.props.counters.map(count => (
      <Counter
        key={count.id}
        count={count}
        onDelete={this.props.onDelete}
        onInc={this.props.onInc}
        onDec={this.props.onDec}
        onAdd={this.props.handleAdd}
      />
    ));
    return (
      <div className="container">
        <form action="" className="form-inline mb-4 row">
          <input
            onChange={this.handleChange}
            name="item"
            className="col-5"
            type="text"
            placeholder="Add Item"
          />
          <input
            onChange={this.handleChange}
            name="price"
            className="col-3"
            type="text"
            placeholder="Price"
          />
          <button
            className="btn btn-secondary col-1.5"
            onClick={this.props.onAdd.bind(
              this,
              this.state.item,
              this.state.price
            )}>
            Add
          </button>
          <button
            className="col-2 btn btn-secondary"
            onClick={this.props.onReset}>
            Reset
          </button>
        </form>
        <div className="container-fluid">{dataCounter}</div>
      </div>
    );
  }
}

export default Counters;
