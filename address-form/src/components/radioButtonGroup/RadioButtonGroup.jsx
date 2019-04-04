import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FormInput from '../formInput/FormInput';

const RadioButtonGroup = (props) => {
  const { country, className } = props;
  return (
    <div className="clearfix">
      <Field
        name="country"
        label="United States"
        className={className}
        component={FormInput}
        value="United States"
        type="radio"
        checked={country === 'United States'}
      />
      <Field
        name="country"
        label="Canada"
        className={className}
        component={FormInput}
        value="Canada"
        type="radio"
        checked={country === 'Canada'}
      />
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  country: 'United States',
  className: '',
};

RadioButtonGroup.propTypes = {
  country: PropTypes.string,
  className: PropTypes.string,
};

export default RadioButtonGroup;
