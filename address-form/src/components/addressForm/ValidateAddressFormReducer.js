import { VALIDATE_ADDRESS_FORM } from "./AddressFormActions";

const initialState = {
  validatedaddressFormFields: {}
};
const ValidateAddressFormReducer = (state = initialState, action) => {
  let result;

  switch (action.type) {
    case VALIDATE_ADDRESS_FORM:
      result = Object.assign({}, state, {
        validatedaddressFormFields: action.payload
      });
      break;
    default:
      result = state;
  }
  return result;
};

export default ValidateAddressFormReducer;
