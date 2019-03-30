import React from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from "redux-form";
import FormInput from "../formInput/FormInput";
import FormSelect from "../formSelect/FormSelect";
import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";

let AddressFields = props => {
  const { handleSubmit, onChange, defaultCountry, dropdownData, country } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        label="First Name"
        className="form-group"
        component={FormInput}
        type="text"
        labelName="firstName"
      />
      <Field
        name="lastName"
        label="Last Name"
        className="form-group"
        component={FormInput}
        type="text"
        labelName="lastName"
      />
      <Field
        name="address1"
        label="Address 1"
        className="form-group"
        component={FormInput}
        type="text"
        labelName="address1"
      />
      <Field
        name="address2"
        label="Address 2"
        className="form-group"
        component={FormInput}
        type="text"
        labelName="address2"
      />
      <Field
        name="email"
        label="Email"
        className="form-group"
        component={FormInput}
        type="email"
        labelName="email"
      />
      <RadioButtonGroup buttonList={dropdownData} onChange={onChange} checked={true} className="form-check-label"/>
      <Field
        name="state"
        label="State"
        className="form-control"
        component={FormSelect}
        data={dropdownData[country || defaultCountry].states}
        onChange={onChange}
        labelName="state"
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

// Set up the form value selector to get the field values
const selector = formValueSelector('address-form');
AddressFields = connect(
  state => {
    const country = selector(state, 'country');//Name of the radio buttons is country
    return {
      country
    }
  }
)(AddressFields);

export default reduxForm({
  form: "address-form"
})(AddressFields);

