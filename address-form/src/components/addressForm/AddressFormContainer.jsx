import React, { Component } from "react";
import { connect } from "react-redux";
import AddresFields from "../addressForm/AddressFormFields";

class AddressForm extends Component {
  componentDidMount() {
    console.log("Form Mounted");
  }

  render() {
    return <AddresFields onSubmit={this.props.onSubmit} dropdownData={this.props.dropdownData} onChange={this.props.onChange} defaultCountry={this.props.defaultCountry}/>;
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(AddressForm);
