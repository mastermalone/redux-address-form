import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import FormInput from "../formInput/FormInput";

const AddressFields = props => {
  console.log("THE PROPS INSIDE", props);
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="address1"
        label="Address 1"
        className="input-class"
        component={FormInput}
        type="text"
      />
      <Field
        name="address2"
        label="Address 2"
        className="input-class"
        component={FormInput}
        type="text"
      />
      <Field
        name="firstName"
        label="Email"
        className="input-class"
        component={FormInput}
        type="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "address-form"
})(AddressFields);
// export default AddressFields;
