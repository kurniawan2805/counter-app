import React, { Component } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Counters from "./components/Counters";
import Total from "./components/Total";

class App extends Component {
  state = {
    counters: [
      { id: uuid.v4(), item: "Pisang Goreng", quantity: 0, price: 1000 },
      { id: uuid.v4(), item: "Perkedel", quantity: 1, price: 2000 },
      { id: uuid.v4(), item: "Bala-Bala", quantity: 0, price: 800 },
      { id: uuid.v4(), item: "Gehu", quantity: 2, price: 1500 }
    ],
    total: 0
  };

  // componentDidMount() {
  //   // initialize total price
  //   this.setState({
  //     total: this.countTotal()
  //   });
  // }

  countTotal = state => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalPrice = this.state.counters
      .map(c => c.price * c.quantity)
      .reduce(reducer, 0);
    return totalPrice;
  };

  handleDelete = id => {
    const removedDelEl = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: removedDelEl });
  };

  handleInc = count => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(count);
    counters[idx] = { ...count };
    // const itemQty = counters[idx].quantity;
    counters[idx].quantity += 1;
    this.setState({
      counters,
      total: this.countTotal()
    });
  };

  handleDec = count => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(count);
    counters[idx] = { ...count };
    const itemQty = counters[idx].quantity;
    if (itemQty > 0) counters[idx].quantity -= 1;
    this.setState({
      counters,
      total: this.countTotal()
    });
  };
  handleAdd = ({ item, price }) => {
    // e.preventDefault();
    const priceInt = parseInt(price, 10);
    console.log("add" + item + price + "tes");
    if (item !== "" && priceInt > 0) {
      const newItem = {
        id: uuid.v4(),
        price,
        item,
        quantity: 0
      };
      const counters = [...this.state.counters, newItem]; //make a clone
      this.setState({ counters });
    } else {
      alert("Please check your input!");
    }
  };

  handleReset = e => {
    e.preventDefault();
    const resetedValue = this.state.counters.map(c => ({
      id: c.id,
      item: c.item,
      price: c.price,
      quantity: 0
    }));
    this.setState({ counters: resetedValue });
  };

  render() {
    //
    // console.log(this.countTotal());
    return (
      <div className="container-fluid">
        <Header counters={this.state.counters} />
        <Banner />
        <Counters
          counters={this.state.counters}
          total={this.state.total}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onInc={this.handleInc}
          onDec={this.handleDec}
          onAdd={this.handleAdd}
          // countTotal={this.countTotal}
        />
        <Total counters={this.state.counters} />
      </div>
    );
  }
}

export default App;
