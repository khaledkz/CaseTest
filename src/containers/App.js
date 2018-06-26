import React, { Component } from "react";
import Menu from "../components/Menu/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
 import SelectCustomer from "../components/SelectCustomer/SelectCustomer";
import ViewCustomer from "../components/ViewCustomer/ViewCustomer";
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Route exact path="/" component={HomePage} />
          <Route path="/view-customer" component={ViewCustomer} />
          <Route path="/select-customer" component={SelectCustomer} />
        </div>
      </Router>
    );
  }
}

export default App;
