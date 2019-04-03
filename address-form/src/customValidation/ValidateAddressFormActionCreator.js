import { VALIDATE_ADDRESS_FORM } from "../components/addressForm/AddressFormActions";

const ValidateAddressForm = payload => {
  return {
    type: VALIDATE_ADDRESS_FORM,
    payload
  };
};

export default ValidateAddressForm;
