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
  <div className={className+' has-success'}>
    <label htmlFor={labelName}>{label}</label>
    <input
      id={labelName}
      {...input}
      placeholder={label}
      type={type}
      checked={checked}
      className={type === "radio" ? "form-check-label" : "form-control"}
    />
    {type!== "radio" && <span className="glyphicon glyphicon-ok form-control-feedback"></span>}
    {touched &&
      ((error && <small className="text-danger">{error}</small>) ||
        (warning && <small className="text-warning">{warning}</small>))}
  </div>
);

export default FormInput;
