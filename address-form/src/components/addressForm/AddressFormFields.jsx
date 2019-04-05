import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import FormInput from '../formInput/FormInput';
import FormSelect from '../formSelect/FormSelect';
import RadioButtonGroup from '../radioButtonGroup/RadioButtonGroup';

let AddressFields = (props) => {
    const {
    handleSubmit,
    onChange,
    dropdownData,
    country,
    fieldLabels,
    countryLabels,
    selectOnChange,
    selectOption,
    selectPlaceHolder,
    defaultCountry,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="container address-form-component">
      {console.log('WTH IS Selected option', selectOption)}
      {fieldLabels.firstName && (
        <Field
          name="firstName"
          label={fieldLabels.firstName}
          className="form-group"
          component={FormInput}
          type="text"
        />
      )}
      {fieldLabels.lastName && (
        <Field
          name="lastName"
          label={fieldLabels.lastName}
          className="form-group"
          component={FormInput}
          type="text"
        />
      )}
      {fieldLabels.address1 && (
        <Field
          name="address1"
          label={fieldLabels.address1}
          className="form-group"
          component={FormInput}
          type="text"
        />
      )}
      {fieldLabels.address2 && (
        <Field
          name="address2"
          label={fieldLabels.address2}
          className="form-group"
          component={FormInput}
          type="text"
        />
      )}
      {fieldLabels.city && (
        <Field
          name="city"
          label={fieldLabels.city}
          className="form-group"
          component={FormInput}
          type="text"
        />
      )}
      {fieldLabels.state && (
        <RadioButtonGroup
          buttonList={dropdownData}
          onChange={onChange}
          className="form-check-label float-left"
          setChecked={defaultCountry}
          checked={country}
          labels={countryLabels}
          name="country"
        />
      )}
      {fieldLabels.state && (
        <Field
          name="state"
          label={fieldLabels.state}
          className="form-control clearfix"
          component={FormSelect}
          data={dropdownData[defaultCountry || countryLabels[0]].states}
          selectOnChange={selectOnChange}
          selectOption={selectOption}
          placeHolder={selectPlaceHolder}
        />
      )}
      {fieldLabels.zipcode && (
        <Field
          name="zipcode"
          label={fieldLabels.zipcode}
          className="form-group"
          component={FormInput}
          type="number"
        />
      )}
      {fieldLabels.email && (
        <Field
          name="email"
          label={fieldLabels.email}
          className="form-group"
          component={FormInput}
          type="email"
        />
      )}
      {fieldLabels.submit && (
        <button type="submit" className="btn btn-primary float-right">
          {fieldLabels.submit}
        </button>
      )}
    </form>
  );
};

AddressFields.defaultProps = {
  handleSubmit: () => false,
  onChange: () => false,
  dropdownData: [],
  country: '',
  countryLabels: [],
  selectOnChange: () => false,
  selectOption: '',
  selectPlaceHolder: '',
  defaultCountry: ''
};

AddressFields.propTypes = {
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  dropdownData: PropTypes.instanceOf(Object),
  country: PropTypes.string,
  countryLabels: PropTypes.instanceOf(Object),
  selectOnChange: PropTypes.func,
  selectOption: PropTypes.string,
  selectPlaceHolder: PropTypes.string,
  defaultCountry: PropTypes.string
};

export default AddressFields;