const validate = values => {
  const errors = {};
  console.log("VALIDATE VALUES", values);

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.address1) {
    errors.address1 = "Required";
  }
  if (!values.address2) {
    errors.address2 = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.zipcode) {
    errors.zipcode = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default validate;
