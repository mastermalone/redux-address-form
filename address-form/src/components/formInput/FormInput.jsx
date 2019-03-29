import React from "react";

const FormInput = ({
  type,
  className,
  label,
  input,
  meta: { touched, error }
}) => (
  <div className={className}>
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

export default FormInput;
