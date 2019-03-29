import React from "react";

const FormSelect = ({
  data,
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
      <select name={label} id={label}>
        {data.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  </div>
);

export default FormSelect;
