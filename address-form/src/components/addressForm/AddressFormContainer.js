import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'redux';

import validate from '../../validation/AddressFormValidation';

import AddressFields from './AddressFormFields';
import './addressForm.css';

/**
 * @summary This container passes country states/provvinces to the addressField component
 * @property {Array} props.dropdownData
 * @property {String} props.defaultCountry
 */

const selector = formValueSelector('address-form');
const enhance = compose(
  connect(state => selector(
    state,
    'country',
    'firstName',
    'lastName',
    'address1',
    'address2',
    'state',
    'city',
    'zipcode',
    'email',
  )),
  reduxForm({
    validate,
  }),
);

export default enhance(AddressFields);
