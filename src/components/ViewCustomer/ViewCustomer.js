import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/ViewCustomer.css";
import axios from "axios";

class ViewCustomer extends Component {
  state = {
    customerData: [],
    error: null,
    userNotFound: false
  };
  componentDidMount() {
    const { customerRefNumner } = this.props;
    this.getCustomer(customerRefNumner);
  }

  getCustomer = async customer_ref => {
    fetch(
      `https://testk.caseblocks.com/case_blocks/search.json?query=customer_ref:${customer_ref}&auth_token=Rgik46EHz-C7sx5xonCV`
    )
      .then(response => {
        if (response.status > 399) {
          throw new Error("Can't handle your request");
        }
        return response.json();
      })
      .then(response => {
        if (response.length === 0) {
          return this.setState({ userNotFound: true });
        }
        this.setState({ customerData: response });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
        console.log("Error: " + err.message);
      });
  };

  render(props) {
    if (this.props.customerRefNumner) {
      if (!this.state.error && !this.state.userNotFound) {
        return (
          <div>
            {this.state.customerData
              ? this.state.customerData.map((customerCases, i) => {
                  if (customerCases.cases[i]) {
                    return (
                      <div className="EnquiryBox">
                        <h3>{customerCases.cases[i].case_type}</h3>

                        {customerCases.cases.map((singleCase, i) => {
                          return (
                            <ul>
                              {singleCase.title ? (
                                <li>
                                  <span>title: </span>
                                  {singleCase.title}
                                </li>
                              ) : null}
                              {singleCase.nature_of_complaint ? (
                                <li>
                                  <span>complaint: </span>{" "}
                                  {singleCase.nature_of_complaint}
                                </li>
                              ) : null}
                              {singleCase.complaint_from ? (
                                <li>
                                  <span>source: </span>{" "}
                                  {singleCase.complaint_from}
                                </li>
                              ) : null}
                              {singleCase.created_at ? (
                                <li>
                                  <span>date : </span>
                                  {singleCase.created_at}
                                </li>
                              ) : null}{" "}
                              ls
                            </ul>
                          );
                        })}
                      </div>
                    );
                  }
                })
              : null}
            {/* {this.state.customerData.length<0?<h3 className="customerNotSelected">User Not Found!!</h3>:null} */}
          </div>
        );
      } else {
        return (
          <h3 className="customerNotSelected">
            {this.state.error ? this.state.error+', Please check your internet connection' : null}{" "}
            {this.state.userNotFound ? "User Not Found" : null}
          </h3>
        );
      }
    } else {
      return (
        <h3 className="customerNotSelected">
          You did not select any customer yet please navigate to select customer
          and add the customer ref number.
        </h3>
      );
    }
  }
}

const stateToProps = state => {
  return {
    customerRefNumner: state.customer.customerRef
  };
};

export default connect(stateToProps)(ViewCustomer);
