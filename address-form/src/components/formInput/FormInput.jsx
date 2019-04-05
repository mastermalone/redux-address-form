/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  name,
  checked,
  type,
  className,
  label,
  input,
  meta: { touched, error, warning },
}) => (
  <div className={`${className} has-success`}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      {...input}
      placeholder={label}
      type={type}
      checked={checked}
      className={type === 'radio' ? 'form-check-label' : 'form-control'}
    />
    {type !== 'radio' && !error && (
      <span className="glyphicon glyphicon-ok form-control-feedback" />
    )}
    {touched
      && ((error && <small className="text-danger">{error}</small>)
        || (warning && <small className="text-warning">{warning}</small>))}
  </div>
);

FormInput.defaultProps = {
  name: '',
  checked: false,
  type: '',
  className: '',
  label: '',
  input: [],
  meta: {},
};

FormInput.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.instanceOf(Object),
  meta: PropTypes.instanceOf(Object),
};

export default FormInput;
