import GET_STATES_DATA from "./GetStatesActions";

const initialState = {
  statesData: {}
};

const GetStatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES_DATA:
      return {...state, statesData: action.payload }
    default:
      return state;
  }
};

export default GetStatesReducer;
