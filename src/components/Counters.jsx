import React, { Component } from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

class Counters extends Component {
  state = {
    item: "",
    price: 0
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleAdd = e => {
    e.preventDefault();
    this.props.onAdd({ ...this.state });
    this.setState({
      item: "",
      price: ""
    });
  };

  componentDidUpdate() {}

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
    // const addedItem = `${this.state.item} with cost ${this.state.price}`;
    return (
      <div className="container-fluid">
        <form action="" className="mb-4 form-inline">
          <div className="form-group col-5">
            <label for="addItem" className="">
              Add Item
            </label>
            <input
              onChange={this.handleChange}
              id="addItem"
              name="item"
              className="form-control"
              type="text"
              placeholder="Add Item"
              value={this.state.item}
            />
          </div>
          <div className="form-group col-3">
            <label for="addPrice" className="">
              Price
            </label>
            <input
              onChange={this.handleChange}
              name="price"
              id="addPrice"
              className="form-control"
              type="number"
              min="0"
              step="100"
              placeholder="Price"
              value={this.state.price}
            />
          </div>

          <button
            className=" form-control btn btn-secondary col-2"
            onClick={this.handleAdd}>
            Add
          </button>

          <label for="addPrice" className="" />
          <button
            className="form-control col-2 btn btn-secondary"
            onClick={this.props.onReset}>
            Reset
          </button>
        </form>
        <p>{/*addedItem*/}</p>
        <div className="">{dataCounter}</div>
        {/*<div className="form-row row">
          <span className=" mb-2 col-2">Total:</span>
          <span className=" mb-2 col-2">{this.props.total}</span>
        </div>*/}
      </div>
    );
  }
}

export default Counters;
