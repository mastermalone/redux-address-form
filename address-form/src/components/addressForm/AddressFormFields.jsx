import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import FormInput from "../formInput/FormInput";
import FormSelect from "../formSelect/FormSelect";
import RadioButtonGroup from "../radioButtonGroup/RadioButtonGroup";

let AddressFields = props => {
  console.log("THE PROPS", props);
  const {
    handleSubmit,
    onChange,
    defaultCountry,
    dropdownData,
    country
  } = props;
  return (
    <form onSubmit={handleSubmit} className="container">
      {!props.hideFirstName && (
        <Field
          name="firstName"
          label="First Name"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="firstName"
        />
      )}
      {!props.hideLastName && (
        <Field
          name="lastName"
          label="Last Name"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="lastName"
        />
      )}
      {!props.hideAddress1 && (
        <Field
          name="address1"
          label="Address 1"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="address1"
        />
      )}
      {!props.hideAddress2 && (
        <Field
          name="address2"
          label="Address 2"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="address2"
        />
      )}
      {!props.hideCity && (
        <Field
          name="city"
          label="City"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="city"
        />
      )}
      {!props.hideStates && (
        <RadioButtonGroup
          buttonList={dropdownData}
          onChange={onChange}
          checked={true}
          className="form-check-label float-left"
        />
      )}
      {!props.hideStates && (
        <Field
          name="state"
          label="State"
          className="form-control clearfix"
          component={FormSelect}
          data={dropdownData[country || defaultCountry].states}
          onChange={onChange}
          labelName="state"
        />
      )}
      {!props.hideZipCode && (
        <Field
          name="zipcode"
          label="Zip"
          className="form-group"
          component={FormInput}
          type="number"
          labelName="zipcode"
        />
      )}
      {!props.hideEmail && (
        <Field
          name="email"
          label="Email"
          className="form-group"
          component={FormInput}
          type="email"
          labelName="email"
        />
      )}
      <button type="submit" className="btn btn-primary float-right">
        Submit
      </button>
    </form>
  );
};

// Set up the form value selector to get the field values
const selector = formValueSelector("address-form");
AddressFields = connect(state => {
  const country = selector(state, "country"); //Name of the radio buttons is country
  const firstName = selector(state, "firstName");
  const lastName = selector(state, "lastName");
  const address1 = selector(state, "address1");
  const address2 = selector(state, "address2");
  const city = selector(state, "city");
  const email = selector(state, "email");
  return {
    country,
    firstName,
    lastName,
    address1,
    address2,
    city,
    email
  };
})(AddressFields);

export default reduxForm({
  form: "address-form"
})(AddressFields);
