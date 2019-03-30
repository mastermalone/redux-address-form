import React from "react";

const FormInput = ({
  labelName,
  checked,
  type,
  className,
  label,
  input,
  meta: { touched, error }
}) => (
  <div className={className}>
    <label htmlFor={labelName}>{label}</label>
    <input id={labelName} {...input} placeholder={label} type={type} checked={checked} className={type === 'radio' ? 'form-check-label': 'form-control'} />
  </div>
);

export default FormInput;
