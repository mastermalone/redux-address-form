import { UPDATE_ADDRESS_FORM } from "./AddressFormActions";

const UpdateAddressForm = payload => {
  return {
    type: UPDATE_ADDRESS_FORM,
    payload
  };
};

export default UpdateAddressForm;
