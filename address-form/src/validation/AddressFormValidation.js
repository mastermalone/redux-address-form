const validate = values => {
  const errors = {};
  const fields = [
    'firstName',
    'lastName',
    'address1',
    'address2',
    'city',
    'zipcode',
    'email'
  ];
  
  fields.forEach((field, idx)=> {
    if (!values[field]) {
      errors[field] = "Required";
    }
    if (typeof values['firstName'] !== 'undefined') {
      if (values['firstName'].length < 2) {
        errors['firstName'] = "The name is too short";
      }
    }
    if (typeof values['lastName'] !== 'undefined') {
      if (values['lastName'].length < 2) {
        errors['lastName'] = "The name is too short";
      }
    }
    if (typeof values['email'] !== 'undefined') {
      if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
        errors['email'] = "Invalid email address";
      }
    }
  });
  return errors;
};

export default validate;
