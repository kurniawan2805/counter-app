import React, { Component } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Counters from "./components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: uuid.v4(), item: "Pisang Goreng", quantity: 0, price: 1000 },
      { id: uuid.v4(), item: "Perkedel", quantity: 1, price: 2000 },
      { id: uuid.v4(), item: "Bala-Bala", quantity: 0, price: 800 },
      { id: uuid.v4(), item: "Gehu", quantity: 2, price: 1500 }
    ]
  };

  handleDelete = id => {
    const removedDelEl = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: removedDelEl });
  };

  handleInc = count => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(count);
    counters[idx] = { ...count };
    counters[idx].quantity += 1;
    this.setState({
      counters
    });
  };
  handleDec = count => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(count);
    counters[idx] = { ...count };
    const itemQty = counters[idx].quantity;
    if (itemQty > 0) counters[idx].quantity -= 1;
    this.setState({
      counters
    });
  };
  handleAdd = (e, item, price) => {
    e.preventDefault();
    console.log("add" + item + price);
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
    return (
      <div className="container-fluid">
        <Header counters={this.state.counters} />
        <Banner />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onInc={this.handleInc}
          onDec={this.handleDec}
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
