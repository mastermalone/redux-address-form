import React from "react";
import { Field } from "redux-form";
import FormInput from "../formInput/FormInput";

const RadioButtonGroup = props => {
  console.log("props.country", props.country);
  return (
    <div className="clearfix">
      <Field
        name="country"
        label="United States"
        className={props.className}
        component={FormInput}
        value="United States"
        type="radio"
        checked={props.country === "United States"}
      />
      <Field
        name="country"
        label="Canada"
        className={props.className}
        component={FormInput}
        value="Canada"
        type="radio"
        checked={props.country === "Canada"}
      />
      {console.log("Is this checked?", props.checked)}
    </div>
  );
};

export default RadioButtonGroup;
