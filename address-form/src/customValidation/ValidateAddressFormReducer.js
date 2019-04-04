import { VALIDATE_ADDRESS_FORM } from "../components/addressForm/GetStatesActions";

const initialState = {
  validatedAddressFormFields: {}
};
const ValidateAddressFormReducer = (state = initialState, action) => {
  let result;

  switch (action.type) {
    case VALIDATE_ADDRESS_FORM:
      result = Object.assign({}, state, {
        validatedAddressFormFields: action.payload
      });
      break;
    default:
      result = state;
  }
  return result;
};

export default ValidateAddressFormReducer;
