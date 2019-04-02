import React, { Component } from "react";
import { connect } from "react-redux";
import AddresFields from "../addressForm/AddressFormFields";

class AddressForm extends Component {
  componentDidMount() {
    console.log("Form Mounted");
  }

  render() {
    let { ...props } = this.props;
    return (
      <AddresFields
        onSubmit={props.onSubmit}
        dropdownData={props.dropdownData}
        onChange={props.onChange}
        defaultCountry={props.defaultCountry}
        {...props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(AddressForm);
