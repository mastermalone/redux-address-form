import { GET_STATES_DATA } from "./AddressFormActions";

const initialState = {
  statesData: {}
};

const GetStatesReducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case GET_STATES_DATA:
      result = Object.assign({}, state, {
        statesData: action.payload
      });
      break;
    default:
      result = state;
  }
  return result;
};

export default GetStatesReducer;
