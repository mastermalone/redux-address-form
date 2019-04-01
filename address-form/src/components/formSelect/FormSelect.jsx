import React from "react";

const FormSelect = ({
  data,
  className,
  label,
  input,
  meta: { touched, error }
}) => (
  <div className="form-group clearfix">
    <label>{label}</label>
    <select className={className} {...input} name={label} id={label}>
      {data.map((item, idx) => (
        <option key={idx}>{item.name}</option>
      ))}
    </select>
  </div>
);

export default FormSelect;
