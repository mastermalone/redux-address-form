import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FormInput from '../formInput/FormInput';

const RadioButtonGroup = (props) => {
  const { setChecked, className, labels, name } = props;
  return (
    <div className="clearfix">
      {labels.map(radiobutton => (
        <Field
        key={radiobutton}
        name={name}
        label={radiobutton}
        className={className}
        component={FormInput}
        value={radiobutton}
        type="radio"
        checked={setChecked === radiobutton}
      />
      ))}
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  setChecked: '',
  className: '',
  labels: [],
  name: ''
};

RadioButtonGroup.propTypes = {
  country: PropTypes.string,
  className: PropTypes.string,
  labels: PropTypes.instanceOf(Object),
  name: PropTypes.string,
};

export default RadioButtonGroup;
