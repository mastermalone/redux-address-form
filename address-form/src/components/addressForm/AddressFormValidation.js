// This is currently not used.  Not until I find a way to make it work.
// This will allow mw to create validation for the fields dynamically
const AddressFormValidation = (formFieldValuesObject, formFields) => {
  if (!formFieldValuesObject) {
    formFieldValuesObject = {};
  }
  const inValidFields = {};

  Object.keys(formFields).forEach(field => {
    if (!formFieldValuesObject[field]) {
      inValidFields[field] = "Required";
    }
  });

  return inValidFields;
};

export default AddressFormValidation;
