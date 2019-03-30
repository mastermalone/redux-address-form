const AddressFormValidation = (formFieldValuesObject, formFields) => {
  if (!formFieldValuesObject) {
    formFieldValuesObject = {};
  }
  const inValidFields = {};

  Object.keys(formFields).forEach(field => {
    if (!formFieldValuesObject[field]) {
      inValidFields[field] = field;
    }

    console.log("Invalid feilds", inValidFields);
    return inValidFields;
  });
};

export default AddressFormValidation;
