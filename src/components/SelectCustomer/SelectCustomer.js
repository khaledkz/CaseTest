import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/SelectCustomer.css";
import Action from "../../redux/actions/Action";

class SelectCustomer extends Component {
  state = {
    handleRefNum: null,
    customerRefNumner: null
  };

  componentDidMount() {
    this.setState({
      customerRefNumner: this.props.customer.customerRef
    });
  }

  updateCustomer = e => {
    e.target.value
      ? this.setState({
          handleRefNum: e.target.value
        })
      : null;
  };
  submitCustomerRef = () => {
    Action.updateCustomerRefNum(this.state.handleRefNum);
    this.setState({
      customerRefNumner: this.state.handleRefNum,
      handleRefNum: ""
    });
  };
  resetCustomerRef = () => {
    Action.resetCustomerInfo()
    this.setState({
      customerRefNumner: null,
      handleRefNum: ""
    });
  };

  render(props) {
     return this.props.customer ? (
      <div className="customerInput">
        <h3>Please Enter Customer Ref Number:</h3>
        {this.state.customerRefNumner
          ? `Ref Num ${this.state.customerRefNumner} selected`
          : null}
        <input
          onChange={this.updateCustomer}
          type="number"
          value={this.state.handleRefNum}
          placeholder="Ref number"
        />
        <div className="submit-reset-btns">
          <input
            onClick={this.submitCustomerRef}
            type="button"
            value="submit"
          />
          <input onClick={this.resetCustomerRef} type="button" value="reset" />
        </div>
      </div>
    ) : (
      <h1>loding</h1>
    );
  }
}

const stateToProps = state => {
  return {
    customer: state.customer,
    customerRefNumner: state.customer.customerRef
  };
};
export default connect(stateToProps)(SelectCustomer);
