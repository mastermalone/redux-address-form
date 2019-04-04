import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';

import FormInput from '../formInput/FormInput';
import FormSelect from '../formSelect/FormSelect';
import RadioButtonGroup from '../radioButtonGroup/RadioButtonGroup';
import validate from '../../validation/AddressFormValidation';

let AddressFields = (props) => {
  const {
    handleSubmit,
    onChange,
    defaultCountry,
    dropdownData,
    country,
    hideFirstName,
    hideLastName,
    hideAddress1,
    hideAddress2,
    hideCity,
    hideStates,
    hideZipCode,
    hideEmail,
    hideSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="container">
      {!hideFirstName && (
        <Field
          name="firstName"
          label="First Name"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="firstName"
        />
      )}
      {!hideLastName && (
        <Field
          name="lastName"
          label="Last Name"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="lastName"
        />
      )}
      {!hideAddress1 && (
        <Field
          name="address1"
          label="Address 1"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="address1"
        />
      )}
      {!hideAddress2 && (
        <Field
          name="address2"
          label="Address 2"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="address2"
        />
      )}
      {!hideCity && (
        <Field
          name="city"
          label="City"
          className="form-group"
          component={FormInput}
          type="text"
          labelName="city"
        />
      )}
      {!hideStates && (
        <RadioButtonGroup
          buttonList={dropdownData}
          onChange={onChange}
          className="form-check-label float-left"
          country={country}
        />
      )}
      {!hideStates && (
        <Field
          name="state"
          label="State/Province"
          className="form-control clearfix"
          component={FormSelect}
          data={dropdownData[country || defaultCountry].states}
          onChange={onChange}
          labelName="state"
        />
      )}
      {!hideZipCode && (
        <Field
          name="zipcode"
          label="Zip"
          className="form-group"
          component={FormInput}
          type="number"
          labelName="zipcode"
        />
      )}
      {!hideEmail && (
        <Field
          name="email"
          label="Email"
          className="form-group"
          component={FormInput}
          type="email"
          labelName="email"
        />
      )}
      {!hideSubmit && (
        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      )}
    </form>
  );
};


AddressFields.defaultProps = {
  handleSubmit: () => false,
  onChange: () => false,
  defaultCountry: 'United States',
  dropdownData: [],
  country: '',
  hideFirstName: false,
  hideLastName: false,
  hideAddress1: false,
  hideAddress2: false,
  hideCity: false,
  hideStates: false,
  hideZipCode: false,
  hideEmail: false,
  hideSubmit: false,
};

AddressFields.propTypes = {
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  defaultCountry: PropTypes.string,
  dropdownData: PropTypes.instanceOf(AddressFields.dropdownData),
  country: PropTypes.string,
  hideFirstName: PropTypes.bool,
  hideLastName: PropTypes.bool,
  hideAddress1: PropTypes.bool,
  hideAddress2: PropTypes.bool,
  hideCity: PropTypes.bool,
  hideStates: PropTypes.bool,
  hideZipCode: PropTypes.bool,
  hideEmail: PropTypes.bool,
  hideSubmit: PropTypes.bool,
};

// Set up the form value selector to get the field values
const selector = formValueSelector('address-form');
AddressFields = connect((state) => {
  const country = selector(state, 'country');
  const firstName = selector(state, 'firstName');
  const lastName = selector(state, 'lastName');
  const address1 = selector(state, 'address1');
  const address2 = selector(state, 'address2');
  const city = selector(state, 'city');
  const zipcode = selector(state, 'zipcode');
  const email = selector(state, 'email');
  return {
    country,
    firstName,
    lastName,
    address1,
    address2,
    city,
    zipcode,
    email,
  };
})(AddressFields);

export default reduxForm({
  validate,
})(AddressFields);
