import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddresFields from './AddressFormFields';
import './addressForm.css';

/**
 * @summary This container passes country states/provvinces to the addressField component
 * @property {Array} props.dropdownData
 * @property {String} props.defaultCountry
 */
const AddressForm = (props) => {
  const {
    onSubmit,
    dropdownData,
    onChange,
    defaultCountry,
  } = props;
  return (
    <AddresFields
      onSubmit={onSubmit}
      dropdownData={dropdownData}
      onChange={onChange}
      defaultCountry={defaultCountry}
      {...props}
    />
  );
};

AddressForm.defaultProps = {
  onSubmit: () => false,
  dropdownData: [],
  onChange: () => false,
  defaultCountry: 'United States',
};

AddressForm.propTypes = {
  onSubmit: PropTypes.func,
  dropdownData: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
  defaultCountry: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(AddressForm);
