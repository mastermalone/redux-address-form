import GET_STATES_DATA from "./GetStatesActions";

const UpdateAddressForm = payload => {
  return {
    type: GET_STATES_DATA,
    payload
  };
};

export default UpdateAddressForm;
