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
      ((error && <small className="text-danger">{error}</small>) ||
        (warning && <small className="text-warning">{warning}</small>))}
  </div>
);

export default FormInput;
