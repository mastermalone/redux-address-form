import React from "react";

const FormInput = ({
  labelName,
  checked,
  type,
  className,
  label,
  input,
  meta: { touched, error, warning }
}) => (
  <div className={className}>
    <label htmlFor={labelName}>{label}</label>
    <input
      id={labelName}
      {...input}
      placeholder={label}
      type={type}
      checked={checked}
      className={type === "radio" ? "form-check-label" : "form-control"}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export default FormInput;
