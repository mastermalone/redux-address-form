import React from "react";
import { Field } from "redux-form";
import FormInput from "../formInput/FormInput";

const RadioButtonGroup = props => {
  return (
    <div>
      {/* {Object.keys(props.buttonList).map((item, idx) => (
        <Field
          name={item}
          label={item}
          className="input-class"
          component={FormInput}
          value={item}
          type="radio"
          key={idx}
        />
      ))} */}
      
      <Field
        name="country"
        label="United States"
        className={props.className}
        component={FormInput}
        value="United States"
        type="radio"
      />
      <Field
        name="country"
        label="Canada"
        className={props.className}
        component={FormInput}
        value="Canada"
        type="radio"
      />
    </div>
  )
}

export default RadioButtonGroup;