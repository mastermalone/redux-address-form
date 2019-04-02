import { GET_STATES_DATA } from "./AddressFormActions";

const UpdateAddressForm = payload => {
  return {
    type: GET_STATES_DATA,
    payload
  };
};

export default UpdateAddressForm;
