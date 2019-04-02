const warn = values => {
  const warnings = {};

  if (values.firstName.length < 2) {
    warnings.firstName = "The name is too short.";
  }
  if (values.lastName.length === 1) {
    warnings.lastName = "The name is too short.";
  }
  if (values.email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      warnings.email = "Invalid email address";
    }
  }
  return warnings;
};

export default warn;
