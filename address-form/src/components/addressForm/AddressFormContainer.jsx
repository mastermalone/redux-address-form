import React, { Component } from "react";
import { connect } from "react-redux";
import AddresFields from "../addressForm/AddressFormFields";

class AddressForm extends Component {
  onSubmit = values => {
    console.log("This props", values);
  };

  componentDidMount() {
    console.log("Form Mounted");
  }

  render() {
    return <AddresFields onSubmit={this.props.onSubmit} />;
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(AddressForm);
