import { UPDATE_ADDRESS_FORM } from "./AddressFormActions";

const initialState = {
  addressFormData: {}
};

const AddressFormReducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case UPDATE_ADDRESS_FORM:
      console.log("UPDATING", action.payload);
      result = Object.assign({}, state, {
        addressFormData: action.payload
      });
      console.log("RESULT", result);
      break;
    default:
      result = state;
  }
  return result;
};

export default AddressFormReducer;
