import React, { Component } from "react";

class Counter extends Component {
  handleZeroStyle = () => {
    let quantityZeroStyle = "form-control mb-2 mr-sm-2 col-1 bg-";
    return (quantityZeroStyle +=
      this.props.count.quantity === 0 ? "warning" : "success");
  };
  render() {
    return (
      //   <div className="">
      //   in case need return value props, bind action
      <div className="form-row row">
        <span className="form-control mb-2 col-6 ">
          {this.props.count.item}
        </span>
        <button
          className="col-1 mb-2  btn btn-secondary"
          onClick={() => this.props.onDec(this.props.count)}>
          -
        </button>
        <span className={this.handleZeroStyle()}>
          {this.props.count.quantity}
        </span>
        <button
          className="col-1 mb-2 btn btn-secondary"
          onClick={() => this.props.onInc(this.props.count)}>
          +
        </button>
        <span className="form-control mb-2 col-2 ">
          {this.props.count.price * this.props.count.quantity}
        </span>
        <button
          className="col-1 mb-2 btn btn-danger"
          onClick={() => this.props.onDelete(this.props.count.id)}>
          {" "}
          x
        </button>
      </div>
    );
  }
}

export default Counter;
